import { atom } from "jotai";

export type TTaskDependency = {
  task_id: number | null;
  type: "depends_of" | "dependent_for";
  selectId: number;
};

export const taskDependenciesAtom = atom<TTaskDependency[]>([]);
