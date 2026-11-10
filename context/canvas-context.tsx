import { fetchRealtimeSubscriptionToken } from "@/app/action/realtime";
import { THEME_LIST, ThemeType } from "@/lib/themes";
import { FrameType } from "@/types/project";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import { useInngestSubscription } from "@inngest/realtime/hooks";

export type LoadingStatusType =
    | "idle"
    | "running"
    | "analyzing"
    | "generating"
    | "completed";

interface CanvasContextType {
    theme?: ThemeType;
    setTheme: (id: string) => void;
    themes: ThemeType[];
    frames: FrameType[];
    setFrames: (frames: FrameType[]) => void;
    updateFrame: (id: string, data: Partial<FrameType>) => void;
    addFrame: (frame: FrameType) => void;

    selectedFrameId: string | null;
    selectedFrame: FrameType | null;
    setSelectedFrameId: (id: string | null) => void;
    loadingStatus: LoadingStatusType;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider = ({
    children,
    initialFrames,
    initialThemeId,
    hasInitialData,
    projectId,
}: {
    children: ReactNode;
    initialFrames: FrameType[];
    initialThemeId?: string;
    hasInitialData: boolean;
    projectId: string | null;
}) => {
    const [themeId, setThemeId] = useState<string>(
        initialThemeId || THEME_LIST[0].id,
    );
    const [frames, setFrames] = useState<FrameType[]>(initialFrames);
    const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null);
    const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>("idle");

    useEffect(() => {
        if (initialFrames && initialFrames.length > 0) {
            setFrames(initialFrames);
        }
    }, [initialFrames]);

    useEffect(() => {
        if (initialThemeId) {
            setThemeId(initialThemeId);
        }
    }, [initialThemeId]);

    useEffect(() => {
        setSelectedFrameId(null);
        setLoadingStatus("idle");
    }, [projectId]);

    const theme = THEME_LIST.find((t) => t.id === themeId);
    const selectedFrame =
        selectedFrameId && frames.length !== 0
            ? frames.find((f) => f.id === selectedFrameId) || null
            : null;

    const { freshData } = useInngestSubscription({
        refreshToken: fetchRealtimeSubscriptionToken,
        enabled: Boolean(projectId),
        key: projectId ?? undefined,
    });

    useEffect(() => {
        if (!projectId) return;
        if (!freshData || freshData.length === 0) return;

        freshData.forEach((message) => {
            const { data, topic } = message;
            if (data.projectId !== projectId) return;

            switch (topic) {
                case "generation.start":
                    setLoadingStatus("running");
                    break;
                case "analysis.start":
                    setLoadingStatus("analyzing");
                    break;
                case "analysis.complete":
                    setLoadingStatus("generating");
                    if (data.theme) setThemeId(data.theme);
                    if (data.screens && data.screens.length > 0) {
                        const skeletonFrames: FrameType[] = data.screens.map((s: any) => ({
                            id: s.id,
                            title: s.name,
                            htmlContent: "",
                            isLoading: true,
                        }));
                        setFrames((prev) => {
                            const seen = new Set(prev.map((f) => f.id));
                            const next = [...prev];
                            for (const frame of skeletonFrames) {
                                if (!seen.has(frame.id)) next.push(frame);
                            }
                            return next;
                        });
                    }
                    break;
                case "frame.created":
                    if (data.frame) {
                        setFrames((prev) => {
                            const newFrames = [...prev];
                            const idx = newFrames.findIndex((f) => f.id === data.screenId);
                            if (idx !== -1) newFrames[idx] = data.frame;
                            else newFrames.push(data.frame);
                            return newFrames;
                        });
                    }
                    break;
                case "generation.complete":
                    setLoadingStatus("completed");
                    setTimeout(() => {
                        setLoadingStatus("idle");
                    }, 1000);
                    break;
                default:
                    break;
            }
        });
    }, [freshData, projectId]);

    const addFrame = useCallback((frame: FrameType) => {
        setFrames((prev) => [...prev, frame]);
    }, []);

    const updateFrame = useCallback((id: string, data: Partial<FrameType>) => {
        setFrames((prev) => {
            return prev.map((frame) =>
                frame.id === id ? { ...frame, ...data } : frame,
            );
        });
    }, []);

    return (
        <CanvasContext.Provider
            value={{
                theme,
                setTheme: setThemeId,
                themes: THEME_LIST,
                frames,
                setFrames,
                selectedFrameId,
                selectedFrame,
                setSelectedFrameId,
                updateFrame,
                addFrame,
                loadingStatus,
            }}
        >
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvas = () => {
    const ctx = useContext(CanvasContext);
    if (!ctx) throw new Error("useCanvas must be used inside CanvasProvider");
    return ctx;
};