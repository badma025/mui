import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";

const useStyles = makeStyles((theme: any) => ({
  searchIcon: {
    marginLeft: theme.spacing(1),
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      // @ts-ignore
      display: (props) => (props.open ? "flex" : "none"),
      // width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    // if it's bigger than sm we show
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    // if it's bigger than sm we don't show
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  theme: {
    // @ts-ignore
    ...styleTheme.themeColor,
  },
  icons: {
    alignItems: "center",
    // @ts-ignore
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    cursor: "pointer",
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar: NextPage = () => {
  const [open, setOpen] = useState(false);
  // this is a prop variable
  const classes = useStyles({ open });

  return (
    <AppBar className={classes.theme}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          turbofuture1
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          turbo
        </Typography>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(!open)}
          />
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge className={classes.badge} badgeContent={2} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            alt="Alim Badmus"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
