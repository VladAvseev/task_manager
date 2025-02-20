import { useQuery } from "@tanstack/react-query";
import { getTaskInfo } from "../../api/getTaskInfo";
import { useParams } from "react-router-dom";

export const useGetTaskInfoQuery = () => {
  const { id } = useParams();
  return useQuery({
    queryKey: ["tasks", id] as const,
    queryFn: ({ queryKey: [, id] }) =>
      getTaskInfo({ mock: true, task_id: Number(id) }),
  });
};
