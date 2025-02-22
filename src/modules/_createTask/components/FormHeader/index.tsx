import { Alert, Button, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { useCreateTaskMutation } from "./mutation";
import { taskNameAtom } from "../NameField/atoms";
import { taskDeadlineAtom } from "../DeadlineField/atoms";
import { taskDependenciesAtom } from "../DependenciesForm/atoms";
import { taskDaysForCompleteAtom } from "../DaysForCompleteField/atoms";
import { useState } from "react";
import { taskResponsibleAtom } from "../ResponsibleSelect/atoms";
import moment from "moment";
import { taskDescriptionAtom } from "../DescriptionField/atoms";

export const FormHeader: React.FC = () => {
  const title = useAtomValue(taskNameAtom);
  const description = useAtomValue(taskDescriptionAtom);
  const responsible = useAtomValue(taskResponsibleAtom);
  const deadline = useAtomValue(taskDeadlineAtom);
  const daysForComplete = useAtomValue(taskDaysForCompleteAtom);
  const dependencies = useAtomValue(taskDependenciesAtom);
  const [isValid, setIsValid] = useState(true);
  const { mutate, isPending } = useCreateTaskMutation();

  const saveHandler = () => {
    console.log({
      title,
      description,
      responsible_user_id: responsible,
      deadline: moment(deadline).format("DD-MM-YYYY"),
      days_for_completion: daysForComplete,
      dependencies: dependencies.map((item) => ({
        task_id: item.task_id as number,
        type: item.type as "depends_of" | "dependent_for",
      })),
    });
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
      title,
      description,
      responsible_user_id: responsible,
      deadline: moment(deadline).format("DD.MM.YYYY"),
      days_for_completion: daysForComplete,
      dependencies: dependencies.map((item) => ({
        task_id: item.task_id as number,
        type: item.type as "depends_of" | "dependent_for",
      })),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 24,
      }}
    >
      <Typography variant="h5" textAlign="center">
        Новая задача
      </Typography>
      {!isValid && <Alert severity="error">Форма запонлена не до конца!</Alert>}
      <Button variant="contained" onClick={saveHandler} loading={isPending}>
        Сохранить
      </Button>
    </div>
  );
};
