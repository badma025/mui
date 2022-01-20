/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { NextPage } from "next";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Message";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import {
  Avatar,
  AvatarGroup,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles((theme: any) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar: NextPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup style={{ marginBottom: 20 }} max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img
            src={
              "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            }
            alt=""
          />
        </ImageListItem>
      </ImageList>
    </Container>
  );
};
export default Rightbar;
