import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../../api/getTasks";

export const useDependencyTaskQuery = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks({ mock: false }),
  });
};
