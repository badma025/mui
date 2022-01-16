import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Message";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import { Container, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  item: {},
  button: {
    // @ts-ignore
    ...styleTheme.myButton,
  },
  icon: {},
  text: {},
}));

const Leftbar: NextPage = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
     
    </Container>
  );
};
export default Leftbar;
