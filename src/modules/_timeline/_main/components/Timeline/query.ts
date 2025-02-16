import { useQuery } from "@tanstack/react-query";
import { getTimeline } from "../../api/getTimeline";

export const useTimelineQuery = () => {
  return useQuery({
    queryKey: ["timeline_tasks"],
    queryFn: () => getTimeline({ mock: true }),
  });
};
