import { makeStyles } from "@mui/styles";
import { Button, Paper, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import moment from "moment";

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

type props = {
  id: number;
};

export const Form: React.FC<props> = ({ id }) => {
  const [date, setDate] = useState<string | null>(null);
  const styles = useStyles();
  return (
    <Paper elevation={5} className={styles.container}>
      <Typography>Хотите изменить дату дедлайна?</Typography>
      <DatePicker
        label={"Дедлайн"}
        value={moment(date)}
        onChange={(value) => {
          setDate(moment(value).format());
        }}
      />
      <Button variant="contained">Сохранить</Button>
    </Paper>
  );
};
