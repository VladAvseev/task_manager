import { makeStyles } from "@mui/styles";
import { Column } from "../Column";
import { useTasksQuery } from "./query";

export const Board = () => {
  const { data } = useTasksQuery();

  const styles = useStyles();
  return (
    <div className={styles.board}>
      {data?.statuses.map((status) => (
        <Column key={status.status_name} status={status} />
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  board: {
    padding: 24,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
