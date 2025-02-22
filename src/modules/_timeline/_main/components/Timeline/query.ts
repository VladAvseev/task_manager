import { useQuery } from "@tanstack/react-query";
import { getTimeline } from "../../api/getTimeline";

export const useTimelineQuery = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTimeline({ mock: false }),
  });
};
