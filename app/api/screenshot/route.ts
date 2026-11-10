import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let cachedExecutablePath: string | null = null;
let downloadPromise: Promise<string> | null = null;
let sharedBrowser: any = null;

async function getOrLaunchBrowser(launchOptions: any, puppeteer: any) {
  if (sharedBrowser) {
    try {
      if (sharedBrowser.isConnected()) {
        return sharedBrowser;
      }
    } catch {
      sharedBrowser = null;
    }
  }

  sharedBrowser = await puppeteer.launch(launchOptions);
  return sharedBrowser;
}

async function getChromiumPath(): Promise<string> {
  if (cachedExecutablePath) return cachedExecutablePath;

  if (!downloadPromise) {
    const chromium = (await import("@sparticuz/chromium-min")).default;
    downloadPromise = chromium
      .executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar",
      )
      .then((path) => {
        cachedExecutablePath = path;
        console.log("Chromium path cached:", path);
        return path;
      })
      .catch((error) => {
        console.error("Failed to get Chromium path:", error);
        downloadPromise = null;
        throw error;
      });
  }
  return downloadPromise;
}

export async function POST(req: Request) {
  let page: any = null;
  try {
    const { html, width = 800, height = 600, projectId } = await req.json();
    const session = await getKindeServerSession();
    const user = await session.getUser();
    if (!user) throw new Error("Unauthorized");

    const userId = user.id;
    const isProduction = process.env.NODE_ENV === "production";
    const isVercel = !!process.env.VERCEL;
    const isThumbnail = Boolean(projectId);

    const fastArgs = [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--disable-gpu",
      "--disable-extensions",
      "--mute-audio",
    ];

    let puppeteer: any;
    let launchOptions: any = {
      headless: true,
      args: fastArgs,
    };

    if (isProduction && isVercel) {
      const chromium = (await import("@sparticuz/chromium-min")).default;
      puppeteer = await import("puppeteer-core");
      const executablePath = await getChromiumPath();

      launchOptions = {
        ...launchOptions,
        args: [...(chromium.args || []), ...fastArgs],
        executablePath,
      };
    } else {
      puppeteer = await import("puppeteer");
      const fs = await import("fs");
      const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
      const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
      if (process.platform === "win32") {
        if (fs.existsSync(chromePath)) {
          launchOptions.executablePath = chromePath;
        } else if (fs.existsSync(edgePath)) {
          launchOptions.executablePath = edgePath;
        }
      }
    }

    const browser = await getOrLaunchBrowser(launchOptions, puppeteer);
    page = await browser.newPage();

    // Optimize viewport: Thumbnails don't need 2x retina size
    await page.setViewport({
      width: isThumbnail ? 680 : Number(width),
      height: isThumbnail ? 480 : Number(height),
      deviceScaleFactor: isThumbnail ? 1 : 2,
    });

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
    });

    // Short wait for styles and layout
    await new Promise((resolve) => setTimeout(resolve, isThumbnail ? 120 : 400));

    // Capture compressed JPEG for thumbnail (30KB vs 2MB PNG)
    const buffer = await page.screenshot({
      type: isThumbnail ? "jpeg" : "png",
      quality: isThumbnail ? 80 : undefined,
      fullPage: false,
    });

    if (projectId) {
      const base64 = buffer.toString("base64");
      const mime = isThumbnail ? "image/jpeg" : "image/png";
      const thumbnailData = `data:${mime};base64,${base64}`;

      await prisma.project.update({
        where: {
          id: projectId,
          userId,
        },
        data: {
          thumbnail: thumbnailData,
        },
      });

      return NextResponse.json({ base64: thumbnailData });
    }

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Screenshot error:", error);
    return NextResponse.json(
      {
        error: "Failed to screenshot",
      },
      {
        status: 500,
      },
    );
  } finally {
    if (page) {
      await page.close().catch(() => {});
    }
  }
}
