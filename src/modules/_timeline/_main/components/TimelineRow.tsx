import { makeStyles } from "@mui/styles";
import {
  dateMinusOneDay,
  datePlusOneDay,
  datesDiference,
} from "../../../../utils/date";
import { DeadlineCell } from "./DeadlineCell";
import { EmptyCells } from "./EmptyCells";
import { TaskCells } from "./TaskCells";
import { TaskWithLateDeadlineCells } from "./TaskWithLateDeadlineCells";
import { TaskWithDeadlineCells } from "./TaskWithDeadlineCells";
import { TTimelineTask } from "../api/getTimeline";

type prefs = {
  task: TTimelineTask;
  startDate: Date;
  finishDate: Date;
  daysCount: number;
  daysRow: Date[];
};

export const TimeLineRow: React.FC<prefs> = ({
  task,
  startDate,
  finishDate,
  daysRow,
}) => {
  const { start_date, finish_date, deadline } = task;

  const styles = useStyles();
  return (
    <div className={styles.gridContainer}>
      {datesDiference(new Date(start_date), startDate) > 0 ? (
        <EmptyCells
          startDate={startDate}
          endDate={dateMinusOneDay(new Date(start_date))}
          daysRow={daysRow}
        />
      ) : null}
      {datesDiference(new Date(finish_date), new Date(deadline)) > 0 ? (
        <>
          <TaskWithLateDeadlineCells
            startDate={new Date(start_date)}
            endDate={new Date(finish_date)}
            deadline={new Date(deadline)}
            task={task}
            daysRow={daysRow}
          />
          {datesDiference(finishDate, new Date(finish_date)) > 0 ? (
            <EmptyCells
              startDate={datePlusOneDay(new Date(finish_date))}
              endDate={finishDate}
              daysRow={daysRow}
            />
          ) : null}
        </>
      ) : null}
      {datesDiference(new Date(deadline), new Date(finish_date)) === 0 ? (
        <>
          <TaskWithDeadlineCells
            startDate={new Date(start_date)}
            endDate={new Date(finish_date)}
            task={task}
            daysRow={daysRow}
          />
          {datesDiference(finishDate, new Date(deadline)) > 0 ? (
            <EmptyCells
              startDate={datePlusOneDay(new Date(deadline))}
              endDate={dateMinusOneDay(finishDate)}
              daysRow={daysRow}
            />
          ) : null}
        </>
      ) : null}
      {datesDiference(new Date(deadline), new Date(finish_date)) > 0 ? (
        <>
          <TaskCells
            startDate={new Date(start_date)}
            endDate={new Date(finish_date)}
            daysRow={daysRow}
            task={task}
          />
          {datesDiference(new Date(deadline), new Date(finish_date)) > 1 ? (
            <EmptyCells
              startDate={datePlusOneDay(new Date(finish_date))}
              endDate={dateMinusOneDay(new Date(deadline))}
              daysRow={daysRow}
            />
          ) : null}
          <DeadlineCell
            startDate={new Date(deadline)}
            endDate={new Date(deadline)}
            daysRow={daysRow}
          />
          {datesDiference(finishDate, new Date(deadline)) > 0 ? (
            <EmptyCells
              startDate={datePlusOneDay(new Date(deadline))}
              endDate={finishDate}
              daysRow={daysRow}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  gridContainer: {
    minHeight: 50,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100, 1fr))",
    margin: "0 auto 8px",
  },
}));
