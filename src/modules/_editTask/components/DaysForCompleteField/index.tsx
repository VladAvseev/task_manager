import { useAtom } from "jotai";
import { taskDaysForCompleteAtom } from "./atoms";
import { InputLabel, TextField } from "@mui/material";

export const DaysForCompleteField = () => {
  const [value, setValue] = useAtom(taskDaysForCompleteAtom);

  return (
    <div>
      <InputLabel>Оценка времени выполнения задачи (кол-во дней)</InputLabel>
      <TextField
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          if (!newValue) {
            setValue(0);
            return;
          }
          if (!Number.isNaN(Number(newValue))) {
            setValue(Number(newValue));
          }
        }}
        placeholder="Введите значение"
        fullWidth
      />
    </div>
  );
};
