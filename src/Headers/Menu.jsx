import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const theme = createTheme({
  props: {
    // Style sheet name ⚛️
    MuiGrid: {
      // Name of the rule
      item: {
        padding: 0,
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: theme.spacing(0),
  },
  item: {
    padding: 15,
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Box className={classes.item}>탐색</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>커리어 성장</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>직군별 연봉</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>이력서</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>매치업</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>프리랜서</Box>
        </Grid>
        <Grid item>
          <Box className={classes.item}>Ai 합격예측</Box>
        </Grid>
      </Grid>
    </div>
  );
}
