import { apiGet } from "../../../api";

const URL = "/task_description";

export type TGetTaskDescriptionRequest = {
  task_id: number;
};

export type TWarning = {
  type: string;
  task_id: number;
};

export type TDependecy = {
  type: string;
  title: string;
  status: string;
  id: number;
  warnings: TWarning[];
};

export type TGetTaskDescriptionResponse = {
  id: number;
  status: string;
  title: string;
  description: string;
  created_at: string;
  deadline: string;
  responsible: {
    id: number;
    name: string;
  };
  warnings: TWarning[];
  is_archieved: boolean;
  days_for_completion: number;
  actual_start_date: string;
  actual_finish_date: string;
  actual_completion_days: number | null;
  dependencies: TDependecy[];
};

export const getTaskInfo = async ({
  task_id,
  mock = false,
}: TGetTaskDescriptionRequest & {
  mock: boolean;
}): Promise<TGetTaskDescriptionResponse> => {
  if (mock) {
    return new Promise((resolve) => resolve(TASK_INFO));
  }
  const { data } = await apiGet(URL, { task_id });
  return data;
};

export const TASK_INFO: TGetTaskDescriptionResponse = {
  id: 1,
  status: "to_do",
  title: "task 1",
  description: "task 1 description",
  created_at: "2025-02-17",
  deadline: "2025-09-25",
  responsible: {
    id: 1,
    name: "Влад",
  },
  warnings: [
    { type: "start_soft", task_id: 1 },
    { type: "start_hard", task_id: 2 },
  ],
  is_archieved: false,
  days_for_completion: 5,
  actual_start_date: "2025-01-01",
  actual_finish_date: "2025-01-01",
  actual_completion_days: 10,
  dependencies: [
    {
      type: "depends_of",
      title: "task 2",
      status: "to_do",
      id: 2,
      warnings: [
        { type: "start_soft", task_id: 1 },
        { type: "start_hard", task_id: 2 },
      ],
    },
    {
      type: "dependent_for",
      title: "task 3",
      status: "to_do",
      id: 3,
      warnings: [
        { type: "start_soft", task_id: 1 },
        { type: "start_hard", task_id: 2 },
      ],
    },
  ],
};
