import { makeStyles } from "@mui/styles";
import { TaskComponent } from "./TaskComponent";
import { TTimelineTask } from "../api/getTimeline";

const useStyles = makeStyles(() => ({
  cell: {
    borderRight: "5px solid red",
  },
}));

type props = {
  startDate: Date;
  endDate: Date;
  task: TTimelineTask;
  daysRow: Date[];
};

export const TaskWithDeadlineCells: React.FC<props> = ({
  startDate,
  endDate,
  daysRow,
  task,
}) => {
  const startIndex =
    daysRow.map((date) => date.getTime()).indexOf(startDate.getTime()) + 1;
  const endIndex =
    daysRow.map((date) => date.getTime()).indexOf(endDate.getTime()) + 2;

  const styles = useStyles();
  return (
    <div
      className={styles.cell}
      style={{
        gridColumn: `${startIndex}/${endIndex}`,
        minWidth: 124 * (endIndex - startIndex),
      }}
    >
      <TaskComponent task={task} />
    </div>
  );
};
