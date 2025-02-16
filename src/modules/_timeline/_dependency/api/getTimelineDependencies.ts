import { apiGet } from "../../../../api";
import { TGetTimelineResponse } from "../../_main/api/getTimeline";

const URL = "/timeline_dependencies";

export type TUser = {
  id: number;
  name: string;
};

export type TWarning = { type: string; task_id: number };

export type TTimelineTask = {
  id: number;
  status: string;
  title: string;
  deadline: string;
  start_date: string;
  finish_date: string;
  responsible: TUser;
  warnings: TWarning[];
};

export type TGetTimelineDependenciesRequest = {
  task_id: number;
};

export type TGetTimelineDependenciesResponse = {
  tasks: TTimelineTask[];
};

export const getTimelineDependencies = async ({
  task_id,
  mock = false,
}: TGetTimelineDependenciesRequest & {
  mock: boolean;
}): Promise<TGetTimelineDependenciesResponse> => {
  if (mock) {
    return new Promise((resolve) => resolve(TIMELINE));
  }
  const { data } = await apiGet(URL, { task_id });
  return data;
};

export const TIMELINE: TGetTimelineResponse = {
  tasks: [
    {
      id: 1,
      status: "to_do",
      title: "task 1",
      deadline: "2025-02-11",
      start_date: "2025-02-01",
      finish_date: "2025-02-11",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "start_soft", task_id: 1 }],
    },
    {
      id: 2,
      status: "to_do",
      title: "task 2",
      deadline: "2025-02-12",
      start_date: "2025-02-02",
      finish_date: "2025-02-12",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "start_hard", task_id: 2 }],
    },
    {
      id: 3,
      status: "to_do",
      title: "task 3",
      deadline: "2025-02-13",
      start_date: "2025-02-03",
      finish_date: "2025-02-13",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "finish_soft", task_id: 3 }],
    },
    {
      id: 4,
      status: "in_progress",
      title: "task 4",
      deadline: "2025-02-14",
      start_date: "2025-02-04",
      finish_date: "2025-02-14",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "finish_hard", task_id: 4 }],
    },
    {
      id: 5,
      status: "in_progress",
      title: "task 5",
      deadline: "2025-02-15",
      start_date: "2025-02-05",
      finish_date: "2025-02-15",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "cross_soft", task_id: 5 }],
    },
    {
      id: 6,
      status: "in_progress",
      title: "task 6",
      deadline: "2025-02-16",
      start_date: "2025-02-06",
      finish_date: "2025-02-16",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "cross_hard", task_id: 6 }],
    },
    {
      id: 7,
      status: "done",
      title: "task 7",
      deadline: "2025-02-17",
      start_date: "2025-02-07",
      finish_date: "2025-02-17",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "late_deadline", task_id: 7 }],
    },
    {
      id: 8,
      status: "done",
      title: "task 8",
      deadline: "2025-02-18",
      start_date: "2025-02-08",
      finish_date: "2025-02-18",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "start_soft", task_id: 8 }],
    },
    {
      id: 9,
      status: "done",
      title: "task 9",
      deadline: "2025-02-19",
      start_date: "2025-02-09",
      finish_date: "2025-02-19",
      responsible: {
        id: 1,
        name: "Влад",
      },
      warnings: [{ type: "start_hard", task_id: 9 }],
    },
  ],
};
