import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useGetProjectsById = (projectId: string) => {
  return useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await axios.get(`/api/project/${projectId}`);
      return res.data;
    },
    enabled: !!projectId,
    staleTime: 1000 * 60 * 3,
    refetchInterval: (query) => {
      const data = query.state.data;
      // If project has no frames yet (generating), poll every 3 seconds
      if (data && (!data.frames || data.frames.length === 0)) {
        return 3000;
      }
      return false;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGenerateDesignById = (projectId: string) => {
  return useMutation({
    mutationFn: async (prompt: string) =>
      await axios
        .post(`/api/project/${projectId}`, {
          prompt,
        })
        .then((res) => res.data),
    onSuccess: () => {
      toast.success("Generation Started");
    },
    onError: (error) => {
      console.log("Project failed", error);
      toast.error("Failed to generate screen ");
    },
  });
};

export const useUpdateProject = (projectId: string) => {
  return useMutation({
    mutationFn: async (themeId: string) =>
      await axios
        .patch(`/api/project/${projectId}`, {
          themeId,
        })
        .then((res) => res.data),
    onSuccess: () => {
      toast.success("Project updated");
    },
    onError: (error) => {
      console.log("Project failed", error);
      toast.error("Failed to update project ");
    },
  });
};
