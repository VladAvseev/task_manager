import { AxiosResponse } from "axios";
import { apiPut } from "../../../../api";

export const URL = "/edit_deadline";

export type TEditDeadlineParams = {
  task_id: number;
  new_deadline: string; // dd.mm.yyyy
};

export const editDeadline = (
  params: TEditDeadlineParams
): Promise<AxiosResponse> => {
  return apiPut(URL, params);
};
