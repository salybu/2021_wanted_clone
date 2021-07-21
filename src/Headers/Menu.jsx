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
import useMediaQuery from "@material-ui/core/useMediaQuery";

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

const menuList = [
  "탐색",
  "커리어 성장",
  "직군별 연봉",
  "이력서",
  "매치업",
  "프리랜서",
  "Ai 합격예측",
];

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
    "& .MuiBox-root": {
      boxSizing: "border-box",
    },
  },
  item: {
    fontFamily: "Gothic A1",
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
    // color: theme.palette.text.secondary,
    "&:hover": {
      borderBottom: "3px solid #e1e2e3",
      // boxShadow: "0 0 0 3px solid #e1e2e3 inset",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
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
  const showAllMenu = useMediaQuery("(min-width:770px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          {showAllMenu
            ? // 반응형, 윈도우 가로길이가 690px 이상일 때
              menuList.map((itemName, index) => (
                <Grid item>
                  <Box
                    className={classes.item}
                    onMouseOver={
                      index == 0 ? props.showSlideMenu : props.hideSlideMenu
                    }
                    style={menuList[index + 1] ? {} : { position: "relative" }} // 마지막 메뉴 (Ai 합격예측)에 오른쪽 위에 Beta 태그 추가하기 위한 설정
                  >
                    {itemName}
                    {!menuList[index + 1] && ( // 마지막 메뉴 (Ai 합격예측)에 오른쪽 위에 Beta 태그 추가
                      <div className={classes.beta}>Beta</div>
                    )}
                  </Box>
                </Grid>
              ))
            : // 윈도우 가로길이가 690px 이하일 때
              ["홈", "탐색", "커리어 성장"].map((itemName) => (
                <Grid item>
                  <Box className={classes.item}>{itemName}</Box>
                </Grid>
              ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
