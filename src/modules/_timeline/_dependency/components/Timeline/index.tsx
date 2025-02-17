import { makeStyles } from "@mui/styles";
import { TimeLineRow } from "./TimelineRow";
import { HeaderCell } from "../HeaderCell";
import { CircularProgress } from "@mui/material";
import { useTimelineDependenciesQuery } from "./query";
import { datePlusOneDay, datesDiference } from "../../../../../utils/date";

const useStyles = makeStyles(() => ({
  main: {
    position: "relative",
    width: "100%",
    overflow: "scroll",
    height: "calc(100vh - 60px - 16px - 48px)",
    "&::-webkit-scrollbar": {
      opacity: 0,
      width: 5,
      height: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      background: "#444444",
    },
  },
  container: {
    position: "sticky",
    zIndex: 2,
    top: 0,
    minWidth: 900,
    height: 20,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(124px, 1fr))",
    margin: "0 auto 10px",
  },
  tableWrapper: {
    margin: "20px 0 0 0",
  },
  loaderWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "200px 0 0 0",
  },
}));

type props = {
  id: number;
};

export const Timeline: React.FC<props> = ({ id }) => {
  const { data = { tasks: [] }, isLoading } = useTimelineDependenciesQuery(id);

  const startDate = (): Date => {
    let date = new Date();
    data.tasks.forEach((task) => {
      if (datesDiference(date, new Date(task.start_date)) > 0) {
        date = new Date(task.start_date);
      }
    });
    return date;
  };

  const finishDate = (): Date => {
    let date = new Date();
    data.tasks.forEach((task) => {
      if (datesDiference(new Date(task.deadline), date) > 0) {
        date = new Date(task.deadline);
      }
      if (datesDiference(new Date(task.finish_date), date) > 0) {
        date = new Date(task.finish_date);
      }
    });
    return date;
  };

  const daysCount = (): number => {
    if (startDate() && finishDate()) {
      return datesDiference(finishDate(), startDate());
    } else {
      throw new Error("ошибка в daysCount");
    }
  };

  const daysRow = (): Date[] => {
    const row = [];
    let date = startDate();
    for (let i = 0; i <= daysCount(); i++) {
      row.push(date);
      date = new Date(datePlusOneDay(date));
    }
    return row;
  };

  const styles = useStyles();
  return (
    <div className={styles.main}>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={styles.container}>
            {daysRow().map((date, index) => (
              <HeaderCell key={index} date={date} index={index} />
            ))}
          </div>
          <div className={styles.tableWrapper}>
            {data.tasks.map((task) => (
              <TimeLineRow
                key={task.id}
                task={task}
                startDate={startDate()}
                finishDate={finishDate()}
                daysCount={daysCount()}
                daysRow={daysRow()}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
