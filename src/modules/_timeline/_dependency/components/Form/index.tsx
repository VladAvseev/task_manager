import { makeStyles } from "@mui/styles";
import { Button, Paper, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useChangeDeadlineMutation } from "./mutation";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 24,
    padding: "0 24px",
  },
}));

export const Form: React.FC = () => {
  const { id } = useParams();
  const { mutate, isPending } = useChangeDeadlineMutation();
  const [date, setDate] = useState<string | null>(null);
  const styles = useStyles();

  const saveHandler = () => {
    if (!id || !date) return;
    mutate({
      task_id: Number(id),
      new_deadline: moment(date).format("DD.MM.YYYY"),
    });
  };

  return (
    <Paper elevation={5} className={styles.container}>
      <Typography>Хотите изменить дату дедлайна?</Typography>
      <DatePicker
        label={"Дедлайн"}
        value={moment(date)}
        onChange={(value) => {
          setDate(moment(value).format());
        }}
        disabled={isPending}
      />
      <Button variant="contained" onClick={saveHandler} loading={isPending}>
        Сохранить
      </Button>
    </Paper>
  );
};
