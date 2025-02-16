import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: 300,
    minWidth: 200,
    margin: "100px auto 0",
    padding: 8,
  },
}));

export const ErrorPage: React.FC = () => {
  const styles = useStyles();
  return (
    <Paper elevation={5} className={styles.main}>
      <Typography>У вас нет доступа к этой странице</Typography>
    </Paper>
  );
};
