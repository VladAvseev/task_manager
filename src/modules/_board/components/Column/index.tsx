import React from "react";
import { TStatus } from "../../api/getTasks";
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Task } from "../Task";

type props = {
  status: TStatus;
};

export const Column: React.FC<props> = ({ status }) => {
  const statusTranslations: Record<string, string> = {
    to_do: "Запланировано",
    in_progress: "В процессе",
    done: "Выполнено",
  };

  const styles = useStyles();
  return (
    <Paper className={styles.column} elevation={5}>
      <Typography style={{ textAlign: "center", marginBottom: 24 }}>
        {statusTranslations[status.status_name]}
      </Typography>
      <div className={styles.tasksList}>
        {status.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </Paper>
  );
};

const useStyles = makeStyles(() => ({
  column: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    width: "32%",
    minWidth: "32%",
    maxWidth: "32%",
  },
  tasksList: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
}));
