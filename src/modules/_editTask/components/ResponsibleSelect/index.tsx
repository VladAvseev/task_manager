import { useAtom } from "jotai";
import { taskResponsibleAtom } from "./atoms";
import { IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { useResponsibleQuery } from "./query";
import { MdClear } from "react-icons/md";

export const ResponsibleSelect = () => {
  const { data = [] } = useResponsibleQuery();
  const [value, setValue] = useAtom(taskResponsibleAtom);

  return (
    <div style={{ width: 300 }}>
      <InputLabel>Ответственный за задачу</InputLabel>
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        IconComponent={
          value
            ? () => (
                <IconButton
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => setValue(null)}
                >
                  <MdClear />
                </IconButton>
              )
            : undefined
        }
      >
        {data.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name} {"("}
            {option.id}
            {")"}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
