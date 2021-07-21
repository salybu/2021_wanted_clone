import "../index.css";

import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// 메뉴 리스트
const menuList = [
  { name: "탐색", link: "#menu1" },
  { name: "커리어 성장", link: "#menu2" },
  { name: "직군별 연봉", link: "#menu3" },
  { name: "이력서", link: "#menu4" },
  { name: "매치업", link: "#menu5" },
  { name: "프리랜서", link: "#menu6" },
  { name: "Ai 합격예측", link: "#menu7" },
];

// 모바일 메뉴 리스트
const menuListMobile = [
  { name: "홈", link: "#menu0" },
  { name: "탐색", link: "#menu1" },
  { name: "커리어 성장", link: "#menu2" },
];

// 폰트 적용
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
    "&:hover": {
      borderBottom: "3px solid #e1e2e3",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  // Ai 합격예측 메뉴 우측 상단에 "Beta" 부분
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
            ? // width: 690px 이상일 때
              menuList.map((item, index) => (
                <Grid item>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    href={item.link}
                  >
                    <Box
                      className={classes.item}
                      onMouseOver={
                        index == 0 ? props.showSlideMenu : props.hideSlideMenu
                      }
                      style={
                        menuList[index + 1] ? {} : { position: "relative" }
                      } // 마지막 메뉴 (Ai 합격예측) 우측상단 에 "Beta" 추가하기 위한 설정
                    >
                      {item.name}
                      {!menuList[index + 1] && ( // 마지막 메뉴 (Ai 합격예측) 우측상단 에 "Beta" 추가
                        <div className={classes.beta}>Beta</div>
                      )}
                    </Box>
                  </Link>
                </Grid>
              ))
            : // width: 690px 이하일 때
              menuListMobile.map((item) => (
                <Grid item>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    href={item.link}
                  >
                    <Box className={classes.item}>{item.name}</Box>
                  </Link>
                </Grid>
              ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}
