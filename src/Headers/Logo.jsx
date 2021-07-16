import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo_img from "../logo.png";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 50, // 16:9
  },
}));

export default function Logo() {
  const classes = useStyles();

  const div = {
    // verticalAlign: "baseline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 0,
  };
  const img_style = {
    width: 77,
    height: 17,
  };
  return (
    <div style={div}>
      <img src={logo_img} style={img_style} />
      {/* <CardMedia className={classes.media} image={logo_img} /> */}
    </div>
  );
}
