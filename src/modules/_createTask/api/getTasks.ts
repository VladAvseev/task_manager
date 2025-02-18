import { apiGet } from "../../../api";

const URL = "/all_tasks";

export type TTask = {
  id: number;
  title: string;
};

export type TGetTasksResponse = {
  tasks: TTask[];
};

export const getTasks = async ({
  mock = false,
}: {
  mock: boolean;
}): Promise<TTask[]> => {
  if (mock) {
    return new Promise((resolve) => resolve(TASKS));
  }
  const { data } = await apiGet(URL);
  return data.task;
};

export const TASKS: TTask[] = [
  {
    id: 1,
    title: "task 1",
  },
  {
    id: 2,
    title: "task 2",
  },
  {
    id: 3,
    title: "task 3",
  },
  {
    id: 4,
    title: "task 4",
  },
  {
    id: 5,
    title: "task 5",
  },
  {
    id: 6,
    title: "task 6",
  },
  {
    id: 7,
    title: "task 7",
  },
  {
    id: 8,
    title: "task 8",
  },
  {
    id: 9,
    title: "task 9",
  },
];
