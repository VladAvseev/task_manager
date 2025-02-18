import { useQuery } from "@tanstack/react-query";
import { getTimelineDependencies } from "../../api/getTimelineDependencies";

export const useTimelineDependenciesQuery = (task_id?: string) => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () =>
      getTimelineDependencies({ mock: true, task_id: Number(task_id) }),
  });
};
