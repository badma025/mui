import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Home } from "@mui/icons-material";

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
  media: {
    height: "250px",
  },
  theme: {
    // @ts-ignore
    color: "orange",
    "&:hover": {
      backgroundColor: "#fff4ec",
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    height: 150,
  },
}));

const Post: NextPage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1642372131426-f811f00a1920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title="My Post"
        />
        <CardContent>
          <Typography variant="h5">My First Post</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            laborum nostrum cupiditate praesentium doloremque quod dolorum odit
            aliquid impedit itaque eos accusamus voluptas aspernatur incidunt
            quasi porro eum explicabo doloribus?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.theme} size="small">
          Share
        </Button>
        <Button className={classes.theme} size="small">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
