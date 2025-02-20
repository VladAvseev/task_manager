import { AxiosResponse } from "axios";
import { apiPost } from "../../../api";

export const URL = "/edit_task";

export type TEditTaskParams = {
  task_id: number;
  task_data: {
    title: string;
    description: string;
    deadline: string; // dd.mm.yyyy
    responsible_user_id: number;
    days_for_completion: number;
    dependencies: {
      task_id: number;
      type: "depends_of" | "dependent_for";
    }[];
  };
};
export const createTask = (params: TEditTaskParams): Promise<AxiosResponse> => {
  return apiPost(URL, params);
};
