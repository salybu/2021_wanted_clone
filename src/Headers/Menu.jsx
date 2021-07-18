import "../index.css";

import React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { blueGrey } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";
// import HeaderContext from "../contexts/HeaderContext";

// const theme = createTheme({
//   props: {
//     // Style sheet name ⚛️
//     MuiGrid: {
//       // Name of the rule
//       item: {
//         padding: 0,
//       },
//     },
//   },
// });

const theme = createTheme({
  typography: {
    fontFamily: ["Gothic A1", "Gothic A1 Light", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Gothic A1", "Gothic A1 Light", "sans-serif"],
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
    fontFamily: "Gothic A1",
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
    // color: theme.palette.text.secondary,
  },
  beta: {
    fontFamily: "Gothic A1 Light",
    fontWeight: "100",
    position: "absolute",
    color: "#189CC4",
    fontSize: 10,
    top: 10,
    right: -7,
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          <Grid item>
            <Box
              className={classes.item}
              // onMouseOver={props.setState}
              // onMouseOut={props.setState}
              onMouseOver={props.showSlideMenu}
            >
              탐색
            </Box>
          </Grid>
          {["커리어 성장", "직군별 연봉", "이력서", "매치업", "프리랜서"].map(
            (itemName) => (
              <Grid item>
                <Box className={classes.item} onMouseOver={props.hideSlideMenu}>
                  {itemName}
                </Box>
              </Grid>
            )
          )}
          <Grid item>
            <Box
              className={classes.item}
              onMouseOver={props.hideSlideMenu}
              style={{ position: "relative" }}
            >
              Ai 합격예측
              <div className={classes.beta}>Beta</div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
