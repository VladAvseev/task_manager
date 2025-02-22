import { useQuery } from "@tanstack/react-query";
import { getResponsible } from "../../api/getResponsible";

export const useResponsibleQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getResponsible({ mock: false }),
  });
};
