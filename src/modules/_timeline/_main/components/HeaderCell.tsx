import { makeStyles } from "@mui/styles";
import { datesDiference } from "../../../../utils/date";

type props = {
  date: Date;
  index: number;
};

export const HeaderCell: React.FC<props> = ({ date, index }) => {
  const now = new Date();
  now.setMilliseconds(1);
  now.setSeconds(0);
  now.setMinutes(0);
  now.setHours(0);
  now.setUTCMilliseconds(1);
  now.setUTCSeconds(0);
  now.setUTCMinutes(0);
  now.setUTCHours(0);

  const styles = useStyles();
  return (
    <div
      className={styles.cell}
      style={{
        gridColumn: `${index + 1}/${index + 2}`,
        background: datesDiference(now, date) === 0 ? "#FFE4C4" : "#FFFFFF",
      }}
    >
      {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  cell: {
    border: "1px solid black",
    minWidth: "124px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    opacity: 1,
  },
}));
