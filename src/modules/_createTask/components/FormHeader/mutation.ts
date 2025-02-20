import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, TCreateTaskParams } from "../../api/createTask";

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: TCreateTaskParams) => createTask(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
