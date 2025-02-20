import React from "react";
import { TTask } from "../../api/getTasks";
import { Link, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { WarningIcon } from "../../../../components/WarningIcon";

type props = {
  task: TTask;
};

export const Task: React.FC<props> = ({ task }) => {
  const styles = useStyles();

  return (
    <Link href={`/edit_task/${task.id}`} style={{ textDecoration: "none" }}>
      <Paper className={styles.task} elevation={5}>
        <div className={styles.firstRow}>
          <Typography variant="body1">{task.title}</Typography>
          <div className={styles.warnings}>
            {task.warnings.map((warning, index) => (
              <WarningIcon
                key={index}
                task_id={warning.task_id}
                type={warning.type}
              />
            ))}
          </div>
        </div>
        <div className={styles.secondRow}>
          <Typography variant="body2">{task.responsible.name}</Typography>
          <Typography variant="body2">{task.deadline}</Typography>
        </div>
      </Paper>
    </Link>
  );
};

const useStyles = makeStyles(() => ({
  task: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  firstRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  secondRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  warnings: {
    display: "flex",
    gap: 8,
  },
}));
