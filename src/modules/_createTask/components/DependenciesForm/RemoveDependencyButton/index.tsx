import { useAtom } from "jotai";
import { Button } from "@mui/material";
import { taskDependenciesAtom } from "../atoms";
import React from "react";

type props = {
  selectIndex: number;
};

export const RemoveDependencyButton: React.FC<props> = ({ selectIndex }) => {
  const [dependencies, setDependencies] = useAtom(taskDependenciesAtom);

  const clickHandler = () => {
    setDependencies(
      dependencies.filter((item) => item.selectId !== selectIndex)
    );
  };

  return (
    <Button
      variant="contained"
      onClick={clickHandler}
      style={{ backgroundColor: "red", width: 200, height: 56 }}
    >
      Удалить
    </Button>
  );
};
