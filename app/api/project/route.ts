import { generateProjectName } from "@/app/action/action";
import { inngest } from "@/inngest/client";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  try {
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          success: false,
          data: [],
        },
        { status: 401 },
      );
    }

    const projects = await prisma.project.findMany({
      where: { userId: user.id },
      take: 12,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        theme: true,
        thumbnail: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: projects,
    });
  } catch (error: any) {
    console.error("[GET /api/project] Error fetching projects:", error);
    return NextResponse.json(
      {
        error: "failed to fetch projects",
        message: error?.message || String(error),
        success: false,
        data: [],
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const session = await getKindeServerSession();
    const user = await session.getUser();

    if (!user) throw new Error("unauthorized attempt");
    if (!prompt) throw new Error("Missing Prompt");

    const userId = user.id;

    const projectName = await generateProjectName(prompt);

    const project = await prisma.project.create({
      data: {
        userId,
        name: projectName,
      },
    });

    try {
      await inngest.send({
        name: "ui/generate.screens",
        data: { userId, projectId: project.id, prompt },
      });
    } catch (error: any) {
      console.error("[POST /api/project] Inngest send error:", error?.message || error);
    }

    return NextResponse.json({
      success: true,
      data: project,
    });
  } catch (error: any) {
    console.error("[POST /api/project] Error creating project:", error);
    return NextResponse.json(
      {
        error: "failed to create project",
        message: error?.message || String(error),
      },
      {
        status: 500,
      },
    );
  }
}
