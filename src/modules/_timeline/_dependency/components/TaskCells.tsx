import { TTimelineTask } from "../api/getTimelineDependencies";
import { TaskComponent } from "./TaskComponent";

type props = {
  startDate: Date;
  endDate: Date;
  task: TTimelineTask;
  daysRow: Date[];
};

export const TaskCells: React.FC<props> = ({
  startDate,
  endDate,
  daysRow,
  task,
}) => {
  const startIndex =
    daysRow.map((date) => date.getTime()).indexOf(startDate.getTime()) + 1;
  const endIndex =
    daysRow.map((date) => date.getTime()).indexOf(endDate.getTime()) + 2;

  return (
    <div
      style={{
        gridColumn: `${startIndex}/${endIndex}`,
        minWidth: 124 * (endIndex - startIndex),
      }}
    >
      <TaskComponent task={task} />
    </div>
  );
};
