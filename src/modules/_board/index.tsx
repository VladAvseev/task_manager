import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import { Provider } from "jotai";
import { Board } from "./components/Board";

const useStyles = makeStyles(() => ({
  page: {
    width: "calc(100vw - 48px)",
    height: "calc(100vh - 60px - 48px)",
    padding: 24,
    margin: "84px 24px 24px 24px",
  },
  title: {
    textAlign: "center",
  },
}));

export const Page: React.FC = () => {
  const styles = useStyles();
  return (
    <Provider>
      <Paper className={styles.page}>
        <Typography variant="h5" textAlign="center">
          Доска задач
        </Typography>
        <Board />
      </Paper>
    </Provider>
  );
};
