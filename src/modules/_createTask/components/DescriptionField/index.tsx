import { useAtom } from "jotai";
import { taskDescriptionAtom } from "./atoms";
import { InputLabel, TextareaAutosize } from "@mui/material";

export const DescriptionField = () => {
  const [value, setValue] = useAtom(taskDescriptionAtom);

  return (
    <div>
      <InputLabel>Описание задачи</InputLabel>
      <TextareaAutosize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите значение"
        minRows={6}
        maxRows={6}
        style={{
          width: "100%",
          padding: 8,
          resize: "none",
          fontSize: 18,
        }}
      />
    </div>
  );
};
