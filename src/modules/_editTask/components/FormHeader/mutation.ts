import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, TEditTaskParams } from "../../api/editTask";

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: TEditTaskParams) => createTask(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
