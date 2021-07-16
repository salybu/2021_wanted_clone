import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import Aside from "./Aside";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1060,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 1060,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Container maxwidth={false} className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <Logo />
        <Menu />
        <Aside />
      </Box>
    </Container>
  );
}
