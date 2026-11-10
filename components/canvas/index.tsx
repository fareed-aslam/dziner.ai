import { LoadingStatusType, useCanvas } from "@/context/canvas-context";
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Spinner } from "../ui/spinner";
import CanvasFloatingToolbar from "./canvas-floating-toolbar";
import { TOOL_MODE_ENUM, ToolModeType } from "@/constant/canvas";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import CanvasControls from "./canvas-controls";
import DeviceFrameSkeleton from "./device-frame-skeleton";
import DeviceFrame from "./device-frame";
import HtmlDialog from "./html-dialog";
import { toast } from "sonner";
import axios from "axios";

const Canvas = ({
  projectId,
  isPending,
  projectName,
}: {
  projectId: string;
  isPending: boolean;
  projectName: string | null;
}) => {
  const { theme, frames, selectedFrame, setSelectedFrameId, loadingStatus } =
    useCanvas();
 
     
  const hasSavedThumbnailRef = useRef(false);

  const saveThumbnailToProject = useCallback(
    async (projectId: string | null) => {
      try {
        if (!projectId) return null;
        const result = getCanvasHtmlContent();
        if (!result?.html) return null;

        setSelectedFrameId(null);
        setIsSaving(true);

        const response = await axios.post("/api/screenshot", {
          html: result.html,
          width: 700,
          height: 500,
          projectId,
        });

        if (response.data) {
          console.log("thumbnail saved", response.data);
        }
      } catch (error) {
        console.log("Failed to save project thumbnail:", error);
      } finally {
        setIsSaving(false);
      }
    },
    [setSelectedFrameId],
  );

  useEffect(() => {
    if (!projectId) return;

    // Trigger save when generation completes
    if (loadingStatus === "completed") {
      const timer = setTimeout(() => {
        saveThumbnailToProject(projectId);
      }, 350);
      return () => clearTimeout(timer);
    }

    // Also auto-save thumbnail if frames are loaded and not saved yet
    if (frames.length > 0 && !hasSavedThumbnailRef.current && loadingStatus === "idle") {
      hasSavedThumbnailRef.current = true;
      const timer = setTimeout(() => {
        saveThumbnailToProject(projectId);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [loadingStatus, projectId, frames.length, saveThumbnailToProject]);

  const onOpenHtmlDialog = () => {
    setOpenHtmlDialog(true);
  };
  const [toolMode, setToolMode] = useState<ToolModeType>(TOOL_MODE_ENUM.SELECT);
  const [zoomPercent, setZoomPercent] = useState<number>(53);
  const [currentScale, setCurrentScale] = useState<number>(0.53);
  const [openHtmlDialog, setOpenHtmlDialog] = useState(false);
  const [isScreenshotting,setIScreenshotting]=useState(false);
  const [isSaving,setIsSaving]=useState(false);

  const canvasRootRef=useRef<HTMLDivElement>(null);

   function getCanvasHtmlContent(){
    const el=canvasRootRef.current;
    if(!el){
      toast.error("Canvas element not found")
      return null;
    }
    let styles="";
    for(const sheet of document.styleSheets){
      try {
        for (const rule of sheet.cssRules) styles+=rule.cssText;

      } catch (error) {
        
      }
    }

    return{
      element:el,
      html:`
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8">
      <style>body{margin:0}*{box-sizing:border-box}${styles}</style>
      </head>
      <body>${el.outerHTML}</body>
      </html>

      `
    }
  }


  const handleCanvasScreenshot=useCallback(async()=>{
    try {
      const result=getCanvasHtmlContent();
      if(!result?.html){
        toast.error("Failed to get canvas content");
return null;
      }
      setSelectedFrameId(null);
      setIScreenshotting(true)

      const response=await axios.post("/api/screenshot",{
        html:result.html,
        width:result.element.scrollWidth,
        height:700,
      },
    {
          responseType:"blob",
          validateStatus:(s)=>(s>=200&&s<300)||s===304,
        }
    
    
      )
    const title= projectName||"Canvas"

      const url=window.URL.createObjectURL(response.data);
      const link=document.createElement("a");
      link.href=url;
      link.download=`${title.replace(/\s+/g,"-").toLowerCase()}-${Date.now()}.png`;
      link.click();
      window.URL.revokeObjectURL(url);
      toast.success("Screenshot Downloaded");
    } catch (error) {
      console.log(error);
      toast.error("Failed to screenshot canvas")
    }finally{
      setIScreenshotting(false);
    }
  },[projectName,setSelectedFrameId]);

  
 const currentStatus = isSaving? "finalizing":isPending
? "fetching"
    : loadingStatus !== "idle" && loadingStatus !== "completed"
      ? loadingStatus
      : null;
 
  return (
    <>
      <div className="relative w-full h-full min-h-0 overflow-hidden">
        <CanvasFloatingToolbar 
        isScreenshotting={isScreenshotting}
        onScreenshot={handleCanvasScreenshot}
        projectId={projectId} />
        {currentStatus && <CanvasLoader status={currentStatus} />}
        <TransformWrapper
          initialScale={0.53}
          initialPositionX={40}
          initialPositionY={5}
          minScale={0.1}
          maxScale={3}
          wheel={{ step: 0.1 }}
          pinch={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
          centerZoomedOut={false}
          centerOnInit={false}
          smooth={true}
          limitToBounds={false}
          panning={{
            disabled: toolMode !== TOOL_MODE_ENUM.HAND,
          }}
          onTransformed={(ref) => {
            setZoomPercent(Math.round(ref.state.scale * 100));
            setCurrentScale(ref.state.scale);
          }}
        >
          {({ zoomIn, zoomOut }) => (
            <>
              <div
              ref={canvasRootRef}
                className={cn(
                  `absolute inset-0 w-full h-full bg-[#eee] dark:bg-[#242423] p-3`,
                  toolMode === TOOL_MODE_ENUM.HAND
                    ? "cursor-grab active:cursor-grabbing"
                    : "cursor-default",
                )}
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                <TransformComponent
                  wrapperStyle={{
                    width: "100%",
                    height: "100%",
                    overflow: "unset",
                  }}
                  contentStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div>
                    {frames?.map((frame, index) => {
                      const baseX = 100 + index * 480;
                      const y = 100;
                      // if (frame.isLoading) {
                      //   return (
                      //     <DeviceFrameSkeleton
                      //       key={index}
                      //       style={{
                      //         transform: `translate(${baseX}px, ${y}px)`,
                      //       }}
                      //     />
                      //   );
                      // }
                      return (
                        <DeviceFrame
                          key={frame.id}
                          frameId={frame.id}
                          title={frame.title}
                          html={frame.htmlContent}
                          isLoading={frame.isLoading}
                          width={420}
                          minHeight={800}
                          scale={currentScale}
                          initialPosition={{ x: baseX, y }}
                          toolMode={toolMode}
                          theme_style={theme?.style}
                          onOpenHtmlDialog={onOpenHtmlDialog}
                        />
                      );
                    })}
                  </div>
                </TransformComponent>
              </div>

              <CanvasControls
                zoomIn={zoomIn}
                zoomOut={zoomOut}
                zoomPercent={zoomPercent}
                toolMode={toolMode}
                setToolMode={setToolMode}
              />
            </>
          )}
        </TransformWrapper>
      </div>
      <HtmlDialog
        html={selectedFrame?.htmlContent ?? ""}
        theme_style={theme?.style}
        open={openHtmlDialog}
        onOpenChange={setOpenHtmlDialog}
      />
    </>
  );
};

export default Canvas;

function CanvasLoader({ status }: { status?: LoadingStatusType | "fetching" |"finalizing"}) {
  return (
    <div
      className={cn(
        `fixed top-24 left-1/2 -translate-x-1/2 w-fit px-4 pt-1.5 pb-2 rounded-br-xl rounded-bl-xl shadow-md flex items-center space-x-2 z-40`,
        status === "fetching" && "bg-gray-500 text-white",
        status === "running" && "bg-amber-500 text-white",
        status === "analyzing" && "bg-blue-500 text-white",
        status === "generating" && "bg-purple-500 text-white",
        status === "finalizing" && "bg-purple-500 text-white",
      )}
    >
      <Spinner className="w-4 h-4 stroke-[3]" />
      <span className="text-sm font-semibold capitalize">
        {status === "fetching" ? "Loading Project" : status}
      </span>
    </div>
  );
}
