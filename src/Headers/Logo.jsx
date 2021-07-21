import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo_img from "../logo.png";
import { CardMedia } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 690,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 0,
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
  },
  media: {
    height: 50, // 16:9
  },
}));

export default function Logo() {
  const classes = useStyles();
  // const div = {
  //   // verticalAlign: "baseline",
  // };
  const showLogo = useMediaQuery("(min-width:770px)");

  const img_style = {
    width: 77,
    height: 17,
  };
  return (
    // <div style={div}>
    <ThemeProvider theme={theme}>
      {showLogo && ( // 반응형, 윈도우 가로길이가 690px 이상일 때
        <div className={classes.root}>
          <img src={logo_img} style={img_style} />
          {/* <CardMedia className={classes.media} image={logo_img} /> */}
        </div>
      )}
    </ThemeProvider>
  );
}
