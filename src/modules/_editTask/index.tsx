import { makeStyles } from "@mui/styles";
import { CircularProgress, Paper } from "@mui/material";
import { Provider } from "jotai";
import { Form } from "./components/Form";
import { FormHeader } from "./components/FormHeader";
import { useGetTaskInfoQuery } from "./components/FormHeader/query";

const useStyles = makeStyles(() => ({
  page: {
    width: "calc(100vw - 48px)",
    minHeight: "calc(100vh - 60px - 48px)",
    padding: 24,
    margin: "84px 24px 24px 24px",
  },
  title: {
    textAlign: "center",
  },
}));

export const Page: React.FC = () => {
  const styles = useStyles();
  const { isLoading } = useGetTaskInfoQuery();

  if (isLoading)
    return (
      <Paper className={styles.page}>
        <CircularProgress style={{ display: "block", margin: "100px auto" }} />
      </Paper>
    );

  return (
    <Provider>
      <Paper className={styles.page}>
        <FormHeader />
        <Form />
      </Paper>
    </Provider>
  );
};
