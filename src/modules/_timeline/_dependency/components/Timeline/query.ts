import { useQuery } from "@tanstack/react-query";
import { getTimelineDependencies } from "../../api/getTimelineDependencies";

export const useTimelineDependenciesQuery = (task_id: number) => {
  return useQuery({
    queryKey: ["timeline_tasks"],
    queryFn: () => getTimelineDependencies({ mock: true, task_id }),
  });
};
