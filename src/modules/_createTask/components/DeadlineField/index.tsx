import { useAtom } from "jotai";
import { taskDeadlineAtom } from "./atoms";
import { InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

export const DeadlineField = () => {
  const [value, setValue] = useAtom(taskDeadlineAtom);

  return (
    <div>
      <InputLabel>Дедлайн</InputLabel>
      <DatePicker
        value={moment(value)}
        onChange={(newValue) => {
          setValue(moment(newValue).format());
        }}
      />
    </div>
  );
};
