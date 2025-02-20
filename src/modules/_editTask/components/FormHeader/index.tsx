import { Alert, Button, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useCreateTaskMutation } from "./mutation";
import { taskNameAtom } from "../NameField/atoms";
import { taskDeadlineAtom } from "../DeadlineField/atoms";
import {
  taskDependenciesAtom,
  TTaskDependency,
} from "../DependenciesForm/atoms";
import { taskDaysForCompleteAtom } from "../DaysForCompleteField/atoms";
import { useEffect, useState } from "react";
import { taskResponsibleAtom } from "../ResponsibleSelect/atoms";
import moment from "moment";
import { taskDescriptionAtom } from "../DescriptionField/atoms";
import { useParams } from "react-router-dom";
import { useGetTaskInfoQuery } from "./query";

export const FormHeader: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useAtom(taskNameAtom);
  const [description, setDescription] = useAtom(taskDescriptionAtom);
  const [responsible, setResponsible] = useAtom(taskResponsibleAtom);
  const [deadline, setDeadline] = useAtom(taskDeadlineAtom);
  const [daysForComplete, setDaysForComplete] = useAtom(
    taskDaysForCompleteAtom
  );
  const [dependencies, setDependencies] = useAtom(taskDependenciesAtom);
  const [isValid, setIsValid] = useState(true);
  const { mutate, isPending } = useCreateTaskMutation();
  const { data } = useGetTaskInfoQuery();

  const saveHandler = () => {
    if (
      !title ||
      !description ||
      !responsible ||
      !deadline ||
      !daysForComplete ||
      dependencies.some((item) => !item.task_id || !item.type)
    ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    mutate({
      task_id: Number(id) || 0,
      task_data: {
        title,
        description,
        responsible_user_id: responsible,
        deadline: moment(deadline).format("DD.MM.YYYY"),
        days_for_completion: daysForComplete,
        dependencies: dependencies.map((item) => ({
          task_id: item.task_id as number,
          type: item.type as "depends_of" | "dependent_for",
        })),
      },
    });
  };

  const setDefaultData = () => {
    setTitle(data?.title || "");
    setDescription(data?.description || "");
    setResponsible(data?.responsible.id || null);
    setDeadline(data?.deadline || null);
    setDaysForComplete(data?.days_for_completion || 0);
    setDependencies(
      data?.dependencies.map(
        (item) =>
          ({
            task_id: item.id,
            type: item.type,
            selectId: item.id,
          } as TTaskDependency)
      ) || []
    );
  };

  useEffect(() => {
    setDefaultData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 24,
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h5" textAlign="center">
        {data?.title || ""}
      </Typography>
      {!isValid && <Alert severity="error">Форма запонлена не до конца!</Alert>}
      <div style={{ display: "flex", gap: 24 }}>
        <Button
          variant="outlined"
          onClick={setDefaultData}
          disabled={isPending}
        >
          Отменить
        </Button>
        <Button variant="contained" onClick={saveHandler} loading={isPending}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
