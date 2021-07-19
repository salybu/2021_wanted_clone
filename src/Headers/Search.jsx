import React from "react";
import { makeStyles, TextField, withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import { PinDropSharp } from "@material-ui/icons";

const tagRecommend = [
  { tag: "#육아휴직", link: "#button1", color: "#f0f8f8" },
  { tag: "#퇴사율5%이하", link: "#button2", color: "#eeedf4" },
  { tag: "#식비", link: "#button3", color: "#e8edf3" },
  { tag: "#연봉상위2~5%", link: "#button4", color: "#e9f4fb" },
  { tag: "#반려동물", link: "#button5", color: "#effbf3" },
];

const useStyles = makeStyles((theme) => ({
  wrap: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    backgroundColor: "#fff",
    zIndex: 101,
  },
  search: {
    // flexGrow: 1,
    maxWidth: 1060,
    padding: "30px 0 100px",
    margin: "0 auto",
  },
  noBorder: {
    border: "none",
  },
  iconSearch: {
    position: "absolute",
    top: 14,
    left: 20,
  },
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
  },
  moveTagHome: {
    float: "right",
    position: "relative",
    right: 15,
  },
  moveIcon: {
    width: 19,
    height: 19,
    position: "absolute",
  },
  tagRecommend: {
    listStyle: "none",
    margin: 0,
    padding: "20px 0 50px",
    overflow: "hidden",
    "& li": {
      float: "left",
      marginLeft: 10,
    },
    "& li:first-child": {
      margin: 0,
    },
    // "&::after": {
    //   content: " ",
    //   display: "block",
    //   clear: "both",
    // },
  },
}));

const TagButton = withStyles({
  root: {
    height: 50,
    // lineHeight: 50,
    fontSize: 15,
    borderRadius: 25,
    padding: "0 26px",
  },
})(Button);

const SearchTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&": {
        borderRadius: 30,
        // borderColor: "#fff",
        backgroundColor: "#f2f4f7",
      },
      "&:focus": {
        backgroundColor: "#fff",
      },
      "& input": {
        padding: "15px 36px 15px 60px",
      },
      "&:focus fieldset": {
        backgroundColor: "#fff",
        borderColor: "blue",
      },
      //   "& fieldset": {
      //     borderColor: "#f2f4f7",
      //     backgroundColor: "#f2f4f7",
      //     // borderRadius: 30,
      //     height: 50,
      //   },
    },
    "& .MuiFilledInput-root": {
      "& input": {
        padding: "15px 36px 15px 60px",
      },
      "&:focus fieldset": {
        borderColor: "blue",
      },
    },
  },
})(TextField);

export default function Search(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrap} onClick={props.hideSearch}>
      <Container maxwidth={false} className={classes.search}>
        <form
          style={{ position: "relative" }}
          // className={classes.searchForm}
        >
          {/* <TextField
            placeholder="#태그, 회사, 포지션 검색"
            className={classes.searchInput}
          /> */}
          <SearchTextField
            fullWidth
            placeholder="#태그, 회사, 포지션 검색"
            variant="outlined"
            id="search-input"
            inputProps={{
              //   classes: { notchedOutline: classes.noBorder },
              disableOutline: true,
            }}
          />
          {/* <TextField
            id="filled-full-width"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            variant="filled"
          /> */}
          <SearchRoundedIcon className={classes.iconSearch} />
        </form>
        <div className={classes.tagWrap}>
          <Container maxwidth={false} className={classes.tagContainer}>
            <h4>추천태그로 검색해보세요</h4>
            <Link
              href="#"
              underline="none"
              color="inherit"
              className={classes.moveTagHome}
            >
              기업태그 홈 이동하기
              <NavigateNextRoundedIcon
                className={classes.moveIcon}
              ></NavigateNextRoundedIcon>
            </Link>
            <ul className={classes.tagRecommend}>
              {tagRecommend.map((item) => (
                <li>
                  <TagButton
                    href={item.link}
                    style={{ backgroundColor: item.color }}
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
