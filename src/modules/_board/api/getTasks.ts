import { apiGet } from "../../../api";

const URL = "/dashboard_tasks";

export type TWarning = { type: string; task_id: number };

export type TTask = {
  id: number;
  title: string;
  deadline: string;
  responsible: {
    id: number;
    name: string;
  };
  warnings: TWarning[];
};

export type TStatus = {
  status_name: string;
  tasks: TTask[];
};

export type TGetBoardTasksResponse = {
  progress: number;
  statuses: TStatus[];
};

export const getTasks = async ({
  mock = false,
}: {
  mock: boolean;
}): Promise<TGetBoardTasksResponse> => {
  if (mock) {
    return new Promise((resolve) => resolve(BOARD_TASKS));
  }
  const { data } = await apiGet(URL);
  return data;
};

export const BOARD_TASKS: TGetBoardTasksResponse = {
  progress: 25,
  statuses: [
    {
      status_name: "to_do",
      tasks: [
        {
          id: 1,
          title: "task 1",
          deadline: "2025-02-11",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "start_soft", task_id: 1 }],
        },
        {
          id: 2,
          title: "task 2",
          deadline: "2025-02-12",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "start_hard", task_id: 2 }],
        },
        {
          id: 3,
          title: "task 3",
          deadline: "2025-02-13",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "finish_soft", task_id: 3 }],
        },
      ],
    },
    {
      status_name: "in_progress",
      tasks: [
        {
          id: 4,
          title: "task 4",
          deadline: "2025-02-14",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "finish_hard", task_id: 4 }],
        },
        {
          id: 5,
          title: "task 5",
          deadline: "2025-02-15",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "cross_soft", task_id: 5 }],
        },
        {
          id: 6,
          title: "task 6",
          deadline: "2025-02-16",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "cross_hard", task_id: 6 }],
        },
      ],
    },
    {
      status_name: "done",
      tasks: [
        {
          id: 7,
          title: "task 7",
          deadline: "2025-02-17",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "late_deadline", task_id: 7 }],
        },
        {
          id: 8,
          title: "task 8",
          deadline: "2025-02-18",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "start_soft", task_id: 8 }],
        },
        {
          id: 9,
          title: "task 9",
          deadline: "2025-02-19",
          responsible: {
            id: 1,
            name: "Влад",
          },
          warnings: [{ type: "start_hard", task_id: 9 }],
        },
      ],
    },
  ],
};
