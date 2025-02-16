import { makeStyles } from "@mui/styles";
import { TaskComponent } from "./TaskComponent";
import { TTimelineTask } from "../api/getTimelineDependencies";

const useStyles = makeStyles(() => ({
  cell: {
    display: "relative",
    height: "100%",
  },
  deadline: {
    position: "relative",
    width: 5,
    bottom: "100%",
    height: "100%",
    background: " #CC0000",
  },
}));

type props = {
  startDate: Date;
  endDate: Date;
  deadline: Date;
  task: TTimelineTask;
  daysRow: Date[];
};

export const TaskWithLateDeadlineCells: React.FC<props> = ({
  startDate,
  endDate,
  deadline,
  daysRow,
  task,
}) => {
  const startIndex =
    daysRow.map((date) => date.getTime()).indexOf(startDate.getTime()) + 1;
  const endIndex =
    daysRow.map((date) => date.getTime()).indexOf(endDate.getTime()) + 2;
  const dealineIndex =
    daysRow.map((date) => date.getTime()).indexOf(deadline.getTime()) + 2;

  const deadlinePosition =
    ((dealineIndex - startIndex) / (endIndex - startIndex)) * 100;

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
      <div
        className={styles.deadline}
        style={{ left: `${deadlinePosition}%` }}
      />
    </div>
  );
};
