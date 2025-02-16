import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../api/getTasks";

export const useTasksQuery = () => {
  return useQuery({
    queryKey: ["board_tasks"],
    queryFn: () => getTasks({ mock: true }),
  });
};
