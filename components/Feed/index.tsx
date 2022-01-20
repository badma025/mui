import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Message";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import { Container, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import Post from "../Post";

const useStyles = makeStyles((theme: any) => ({
  item: {},
  button: {
    // @ts-ignore
    ...styleTheme.myButton,
  },
  icon: {},
  title: {},
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed: NextPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};
export default Feed;
