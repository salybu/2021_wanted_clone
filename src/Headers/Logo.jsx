import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import logo_img from "../logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 0,
  },
}));

export default function Logo() {
  const classes = useStyles();
  const showLogo = useMediaQuery("(min-width:770px)");

  return (
    showLogo && ( // width: 690px 이상일 때
      <div className={classes.root}>
        <img src={logo_img} style={{ width: 77, height: 17 }} />
      </div>
    )
  );
}
