"use client";
import { useGetProjectsById } from "@/features/user-project-id";
import { useParams } from "next/navigation";
import React from "react";
import Header from "./_common/Header";
import Canvas from "@/components/canvas";
import { CanvasProvider } from "@/context/canvas-context";

const Page = () => {
  const params = useParams();
  const id = params.id as string;

  const { data: project, isPending } = useGetProjectsById(id);
  const frames = project?.frames || [];
  const themeId = project?.theme || "";
  const hasInitialData = !isPending && Boolean(project);

  if (!isPending && !project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="h-screen flex flex-col">
      <Header projectName={project?.name} />
      <CanvasProvider
        initialFrames={frames}
        initialThemeId={themeId}
        hasInitialData={hasInitialData}
        projectId={id}
      >
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="relative h-full">
            <Canvas
              projectId={id}
              projectName={project?.name}
              isPending={isPending}
            />
          </div>
        </div>
      </CanvasProvider>
    </div>
  );
};

export default Page;
