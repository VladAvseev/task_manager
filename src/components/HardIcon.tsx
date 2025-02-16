import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: " #CC0000",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const HardIcon: React.FC = () => {
  const styles = useStyles();
  return <div className={styles.icon}>!</div>;
};
