import { useAtom } from "jotai";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { taskDependenciesAtom, TTaskDependency } from "../atoms";
import React, { useState } from "react";
import { MdClear } from "react-icons/md";

const OPTIONS = [
  { id: "depends_of", title: "Выбранная задача зависит от новой задачи" },
  { id: "dependent_for", title: "Новая задача зависит от выбранной задачи" },
];

type props = {
  task: TTaskDependency;
  selectIndex: number;
};

export const DependencyTypeSelect: React.FC<props> = ({
  task,
  selectIndex,
}) => {
  const [dependencies, setDependencies] = useAtom(taskDependenciesAtom);
  const [value, setValue] = useState(task.type);

  const selectHandler = (e) => {
    setDependencies(
      dependencies.map((item) => {
        if (item.selectId === selectIndex) {
          return {
            ...item,
            type: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
    setValue(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="dependency-tasktype-select-label">Тип связи</InputLabel>
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
        {OPTIONS.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
