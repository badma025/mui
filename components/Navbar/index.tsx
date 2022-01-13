import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { styleTheme } from "../../pages/theme";
import { AppBar, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles((theme: any) => ({
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
}));

const Navbar: NextPage = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.theme}>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          turbofuture1
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          turbo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
