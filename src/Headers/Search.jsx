import React from "react";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import { makeStyles, TextField, withStyles } from "@material-ui/core";

import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

// 추천태그
const tagRecommend = [
  { tag: "#육아휴직", link: "#button1", color: "#f0f8f8" },
  { tag: "#퇴사율5%이하", link: "#button2", color: "#eeedf4" },
  { tag: "#식비", link: "#button3", color: "#e8edf3" },
  { tag: "#연봉상위2~5%", link: "#button4", color: "#e9f4fb" },
  { tag: "#반려동물", link: "#button5", color: "#effbf3" },
];

// 검색창
const SearchTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&": {
        borderRadius: 30,
        backgroundColor: "#f2f4f7",
      },
      "& :focus": {
        backgroundColor: "#fff",
      },
      "& input": {
        padding: "15px 36px 15px 60px",
      },
    },
  },
})(TextField);

// 각각의 추천태그 (버튼으로 구현)
const TagButton = withStyles({
  root: {
    height: 50,
    fontSize: 15,
    borderRadius: 25,
    padding: "0 26px",
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  // 전체 감싸는 div
  wrap: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    backgroundColor: "#fff",
    zIndex: 101,
  },
  // 검색 부분
  searchContainer: {
    maxWidth: 1060,
    padding: "30px 0 100px",
    margin: "0 auto",
    [theme.breakpoints.between("sm", "md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  iconSearch: {
    position: "absolute",
    top: 14,
    left: 20,
  },
  // 추천태그 부분
  tagWrap: {
    position: "fixed",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  tagContainer: {
    maxWidth: 1060,
    padding: "50px 0 0",
    margin: "0 auto",
    "& h4": {
      margin: 0,
      color: "#333333",
      display: "inline-block",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 20px 20px",
    },
  },
  moveCorpTagHome: {
    float: "right",
    position: "relative",
    right: 15,
  },
  moveCorpTagIcon: {
    width: 19,
    height: 19,
    position: "absolute",
  },
  tagRecommendWrap: {
    listStyle: "none",
    margin: 0,
    padding: "20px 0 50px",
    overflow: "hidden",
    "& li": {
      float: "left",
      marginLeft: 10,
      "&:first-child": {
        margin: 0,
      },
    },
    // 반응형 구현, theme. 를 사용하기 위해 const TagButton 대신 useStyles 이용
    [theme.breakpoints.down("sm")]: {
      "& a": {
        // TagButton
        height: 34,
        padding: 12,
      },
      "& .MuiButton-label": {
        // TagButton 제목
        fontSize: 13,
      },
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const stopHideSearch = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.wrap} onClick={props.hideSearch}>
      <Container maxwidth={false} className={classes.searchContainer}>
        <form style={{ position: "relative" }}>
          <SearchTextField
            fullWidth
            placeholder="#태그, 회사, 포지션 검색"
            variant="outlined"
            id="search-input"
            onClick={stopHideSearch}
          />
          <SearchRoundedIcon
            className={classes.iconSearch}
            onClick={stopHideSearch}
          />
        </form>
        <div className={classes.tagWrap}>
          <Container maxwidth={false} className={classes.tagContainer}>
            <h4>추천태그로 검색해보세요</h4>
            <Link
              href="#"
              underline="none"
              color="inherit"
              className={classes.moveCorpTagHome}
            >
              기업태그 홈 이동하기
              <NavigateNextRoundedIcon
                className={classes.moveCorpTagIcon}
              ></NavigateNextRoundedIcon>
            </Link>
            <ul className={classes.tagRecommendWrap}>
              {tagRecommend.map((item) => (
                <li>
                  <TagButton
                    href={item.link}
                    style={{ backgroundColor: item.color }}
                    onClick={stopHideSearch}
                  >
                    {item.tag}
                  </TagButton>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </Container>
    </div>
  );
}
