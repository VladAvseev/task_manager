import { Button, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { taskDependenciesAtom } from "./atoms";
import { TaskSelect } from "./TaskSelect";
import { DependencyTypeSelect } from "./DependencyTypeSelect";
import { RemoveDependencyButton } from "./RemoveDependencyButton";

export const DependenciesForm = () => {
  const [dependencies, setDependencies] = useAtom(taskDependenciesAtom);

  const addDependencyHandler = () => {
    setDependencies([
      ...dependencies,
      { task_id: null, type: "depends_of", selectId: new Date().getTime() },
    ]);
  };

  return (
    <div>
      <Typography variant="h6" marginBottom={2}>
        Связи с другими задачами
      </Typography>
      {!dependencies.length && (
        <Typography variant="body2" align="center" marginBottom={2}>
          Нет связей
        </Typography>
      )}
      {dependencies.map((item) => (
        <div
          key={item.selectId}
          style={{ width: "100%", display: "flex", gap: 24, marginBottom: 16 }}
        >
          <TaskSelect task={item} selectIndex={item.selectId} />
          <DependencyTypeSelect task={item} selectIndex={item.selectId} />
          <RemoveDependencyButton selectIndex={item.selectId} />
        </div>
      ))}
      <Button variant="outlined" fullWidth onClick={addDependencyHandler}>
        Добавить связь
      </Button>
    </div>
  );
};
