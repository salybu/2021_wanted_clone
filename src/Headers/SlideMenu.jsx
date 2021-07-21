import "../index.css";

import React from "react";

import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";

import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";

// 메뉴 ( "탐색"메뉴 하위메뉴)
const menu = [
  {
    itemMain: "영업",
    itemSub: [
      "기업영업",
      "외부영업",
      "영업 관리자",
      "기술영업",
      "주요고객사 담당자",
      "솔루션 컨설턴트",
      "해외영업",
    ],
  },
  {
    itemMain: "미디어",
    itemSub: [
      "콘텐츠 크리에이터",
      "PD",
      "영상 편집가",
      "에디터",
      "비디오 제작",
      "작가",
      "출판 기획자",
    ],
  },
  {
    itemMain: "인사",
    itemSub: [
      "인사담당",
      "리크루터",
      "조직문화",
      "평가·보상",
      "헤드헌터",
      "HRBP",
      "HRD",
    ],
  },
  {
    itemMain: "게임 제작",
    itemSub: [
      "게임 기획자",
      "게임 그래픽 디자이너",
      "모바일 게임 개발자",
      "게임 아티스트",
      "게임 클라이언트 개발자",
      "게임 서버 개발자",
      "유니티 개발자",
    ],
  },
  {
    itemMain: "엔지니어링·설계",
    itemSub: [
      "전자 엔지니어",
      "기계 엔지니어",
      "전기 엔지니어",
      "전기기계 공학자",
      "로봇·자동화",
      "QA 엔지니어",
      "제품 엔지니어",
    ],
  },
];

// 폰트 적용
const theme = createTheme({
  typography: {
    fontFamily: [
      "Gothic A1",
      "Gothic A1 Light",
      "Gothic A1 ExtraLight",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          "Gothic A1",
          "Gothic A1 Light",
          "Gothic A1 ExtraLight",
          "sans-serif",
        ],
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 380,
  },
  itemWrap: {
    padding: "40px 20px 0 0",
  },
  itemMain: {
    fontFamily: "Gothic A1 Light",
    position: "relative",
    fontSize: 17,
    margin: 0,
    padding: "0 20px 15px 0",
  },
  itemSub: {
    fontFamily: "Gothic A1 ExtraLight",
    fontSize: 13,
    margin: 0,
    padding: "5px 20px 5px 0",
  },
  iconArrow: {
    width: 20,
    height: 20,
    position: "absolute",
    float: "right",
    top: 0,
    right: 0,
  },
}));

export default function SlideMenu() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container>
          {menu.map((item) => (
            <Grid item xs={2} lg={2}>
              <div className={classes.itemWrap}>
                <h2 className={classes.itemMain}>
                  {item.itemMain}
                  <NavigateNextRoundedIcon
                    className={classes.iconArrow}
                  ></NavigateNextRoundedIcon>
                </h2>
                {item.itemSub.map((itemSubName) => (
                  <h3 className={classes.itemSub}>{itemSubName}</h3>
                ))}
                <h3
                  className={classes.itemSub}
                  style={{ position: "relative" }}
                >
                  더보기
                  <NavigateNextRoundedIcon
                    className={classes.iconArrow}
                  ></NavigateNextRoundedIcon>
                </h3>
              </div>
            </Grid>
          ))}
          {/* 가장 우측 대 메뉴 */}
          <Grid item xs={2} lg={2}>
            <div className={classes.itemWrap}>
              {[
                "금융",
                "제조·생산",
                "물류·무역",
                "의료·제약·바이오",
                "교육",
                "법률·법집행기관",
                "식·음료",
                "건설·시설",
                "공공·복지",
              ].map((itemName) => (
                <h2 className={classes.itemMain}>
                  {itemName}
                  <NavigateNextRoundedIcon
                    className={classes.iconArrow}
                  ></NavigateNextRoundedIcon>
                </h2>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
