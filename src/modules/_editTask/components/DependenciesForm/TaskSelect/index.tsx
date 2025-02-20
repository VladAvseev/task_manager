import { useAtom } from "jotai";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDependencyTaskQuery } from "./query";
import { taskDependenciesAtom, TTaskDependency } from "../atoms";
import React, { useState } from "react";
import { MdClear } from "react-icons/md";

type props = {
  task: TTaskDependency;
  selectIndex: number;
};

export const TaskSelect: React.FC<props> = ({ task, selectIndex }) => {
  const { data = [] } = useDependencyTaskQuery();
  const [dependencies, setDependencies] = useAtom(taskDependenciesAtom);
  const [value, setValue] = useState(task.task_id);

  const selectHandler = (e) => {
    setDependencies(
      dependencies.map((item) => {
        if (item.selectId === selectIndex) {
          return {
            ...item,
            task_id: Number(e.target.value),
          };
        } else {
          return item;
        }
      })
    );
    setValue(Number(e.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="dependency-task-select-label">Задача</InputLabel>
      <Select
        value={value}
        onChange={selectHandler}
        label="Задача"
        labelId="select-label"
        IconComponent={
          value
            ? () => (
                <IconButton
                  style={{ marginRight: 5 }}
                  size="small"
                  onClick={() => selectHandler({ target: { value: null } })}
                >
                  <MdClear />
                </IconButton>
              )
            : undefined
        }
      >
        {data
          .filter(
            (item) =>
              item.id === value ||
              !dependencies.map((dep) => dep.task_id).includes(item.id)
          )
          .map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.title} {"("}
              {option.id}
              {")"}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
