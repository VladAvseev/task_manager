import { useAtom } from "jotai";
import { taskNameAtom } from "./atoms";
import { InputLabel, TextField } from "@mui/material";

export const NameField = () => {
  const [value, setValue] = useAtom(taskNameAtom);

  return (
    <div>
      <InputLabel>Название задачи</InputLabel>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите значение"
        fullWidth
      />
    </div>
  );
};
