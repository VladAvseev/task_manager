import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDeadline, TEditDeadlineParams } from "../../api/editDeadline";

export const useChangeDeadlineMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: TEditDeadlineParams) => editDeadline(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["timeline_tasks"] });
    },
  });
};
