import { generateProjectName } from "@/app/action/action";
import { inngest } from "@/inngest/client";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) throw new Error("unauthorized attempt");

    const project = await prisma.project.findFirst({
      where: {
        userId: user.id,
        id: id,
      },
      include: {
        frames: true,
      },
    });
    if (!project) {
      return NextResponse.json(
        {
          error: "Project not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to fetch the projects",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { prompt } = await request.json();
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) throw new Error("unauthorized attempt");
    if (!prompt) throw new Error("Missing Prompt");

    const userId = user.id;
    const project = await prisma.project.findFirst({
      where: { id, userId: user.id },
      include: { frames: true },
    });

    if (!project) throw new Error("Project not found");

    // const projectName = await generateProjectName(prompt);

    // const project = await prisma.project.create({
    //   data: {
    //     userId,
    //     name: projectName,
    //   },
    // });

    try {
      await inngest.send({
        name: "ui/generate.screens",
        data: {
          userId,
          projectId: id,
          prompt,
          frames: project.frames,
          theme: project.theme,
        },
      });
    } catch (error: any) {
      console.error("[POST /api/project/[id]] Inngest send error:", error?.message || error);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("[POST /api/project/[id]] Error generating frame:", error);
    return NextResponse.json(
      {
        error: "failed to generate frame",
        message: error?.message || String(error),
      },
      {
        status: 500,
      },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { themeId } = await request.json();
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!themeId) {
      return NextResponse.json({ error: "Missing Theme" }, { status: 400 });
    }

    const userId = user.id;
    const project = await prisma.project.update({
      where: { id, userId },
      data: { theme: themeId },
    });

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error: any) {
    console.log("Error occurred updating project:", error);
    return NextResponse.json(
      {
        error: error?.message || "failed to update project",
      },
      {
        status: 500,
      },
    );
  }
}
