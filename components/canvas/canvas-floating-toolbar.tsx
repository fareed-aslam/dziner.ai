import { useCanvas } from "@/context/canvas-context";
import { CameraIcon, ChevronDown, Palette, Save, Wand2 } from "lucide-react";
import React, { useState } from "react";
import PromptInput from "../prompt-input";
import { Button } from "../ui/button";
import { parseThemeColors } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ThemeSelector from "./theme-selector";
import { Separator } from "../ui/separator";
import {
  useGenerateDesignById,
  useUpdateProject,
} from "@/features/user-project-id";
import { Spinner } from "../ui/spinner";

const CanvasFloatingToolbar = ({ projectId ,isScreenshotting,onScreenshot}: { projectId: string,isScreenshotting:boolean,onScreenshot:()=>void; }) => {
  const { themes, theme: currentTheme, setTheme } = useCanvas();
  const [promptText, setPromptText] = useState<string>("");

  const { mutate, isPending } = useGenerateDesignById(projectId);
  const update = useUpdateProject(projectId);

  const handleAIGenerate = () => {
    if (!promptText) return;
    mutate(promptText);
  };

  const handleUpdate = () => {
    const themeIdToSave = currentTheme?.id || themes?.[0]?.id || "ocean-breeze";
    update.mutate(themeIdToSave);
  };

  return (
    <div className="fixed top-6 inset-x-0 z-30 flex justify-center px-4">
      <div className="w-fit max-w-2xl bg-background dark:bg-gray-950 rounded-full shadow-xl border">
        <div className="flex flex-row items-center gap-2 px-3">
          <Popover>
            <PopoverTrigger>
              <Button
                size="icon-sm"
                className="px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg shadow-purple-200/50 cursor-pointer"
              >
                <Wand2 className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 !p-2 !rounded-xl shadow-lg border mt-1">
              <PromptInput
                promptText={promptText}
                setPromptText={setPromptText}
                className="min-h-[150px] !ring-1 !ring-purple-500 !rounded-xl shadow-none border-muted"
                hideSubmitBtn={true}
                onSubmit={handleAIGenerate}
              />
              <Button
                disabled={isPending || !promptText.trim()}
                onClick={handleAIGenerate}
                className="px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg shadow-purple-200/50 cursor-pointer w-full mt-2"
              >
                {isPending ? <Spinner /> : "Design"}
              </Button>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <div className="flex items-center gap-2 px-3 py-2 ">
                <Palette className="size-4" />
                <div className="flex gap-1.5">
                  {themes?.slice(0, 4)?.map((theme, index) => {
                    const colors = parseThemeColors(theme.style);
                    return (
                      <div
                        role="button"
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTheme(theme.id);
                        }}
                        className={cn(
                          "w-[26px] h-[26px] rounded-full cursor-pointer",
                          currentTheme?.id === theme.id &&
                            "ring-1 ring-offset-1",
                        )}
                        style={{
                          background: `linear-gradient(135deg, ${colors?.primary}, ${colors?.accent})`,
                        }}
                      />
                    );
                  })}
                </div>
                <div>
                  +{themes?.length - 4} more
                  <ChevronDown className="size-4" />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="px-2 rounded-xl shadow border">
              <ThemeSelector />
            </PopoverContent>
          </Popover>
          <Separator orientation="vertical" className="!h-4" />
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              className="rounded-full cursor-pointer"
              disabled={isScreenshotting}
              onClick={onScreenshot}
            >
              {isScreenshotting?<Spinner/>:<CameraIcon className="size-[18px]" />}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full cursor-pointer"
              onClick={handleUpdate}
            >
              {update.isPending ? (
                <Spinner />
              ) : (
                <>
                  <Save className="size-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasFloatingToolbar;
