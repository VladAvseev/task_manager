import { makeStyles } from "@mui/styles";
import { Timeline } from "./components/Timeline";
import { useParams } from "react-router-dom";

export const DependencyTimelinePage: React.FC = () => {
  const { id } = useParams();

  const styles = useStyles();
  return (
    <div className={styles.page}>
      <Timeline id={Number(id)} />
      {/* <Form id={Number(id)} /> */}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  page: {
    width: "calc(100vw -48px)",
    height: "calc(100vh - 60px -48px)",
    margin: "84px 24px 0 24px",
    display: "flex",
    justifyContent: "center",
    boxShadow: "2px 2px 10px  #C2C2C2",
    padding: 8,
    borderRadius: 10,
  },
}));
