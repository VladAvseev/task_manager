import { makeStyles } from "@mui/styles";
import { WarningIcon } from "../../../../../components/WarningIcon";
import { Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { TTimelineTask } from "../../api/getTimelineDependencies";

const useStyles = makeStyles(() => ({
  task: {
    width: "100%",
    height: "100%",
    padding: 10,
    borderRadius: 5,
    color: "white",
    "&:hover": {
      transform: "scale(1.05)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  tdNone: {
    textDecoration: "none",
  },
}));

type props = {
  task: TTimelineTask;
};

export const TaskComponent: React.FC<props> = ({ task }) => {
  const { id } = useParams();

  const styles = useStyles();
  return (
    <Link
      href={`/dependency_timeline/${task.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className={styles.task}
        style={{
          background:
            task.status === "to_do"
              ? " #C2C2C2"
              : task.status === "in_progress"
              ? " #0087cd"
              : "  #21A038",
          border: task.id === Number(id) ? "4px solid blue" : "",
        }}
      >
        <div className={styles.flex}>
          <div className={styles.tdNone}>
            {"("}
            {task.id}
            {")"} {task.title}
          </div>{" "}
          <div className={styles.tdNone}>
            исполнитель: {task.responsible.name}
          </div>
        </div>
        <div className={styles.flex}>
          {task.warnings.length
            ? task.warnings.map((warn, index) => (
                <WarningIcon key={index} {...warn} />
              ))
            : null}
        </div>
      </div>
    </Link>
  );
};
