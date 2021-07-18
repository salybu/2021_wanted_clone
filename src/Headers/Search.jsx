import React from "react";
import { makeStyles, TextField, withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    backgroundColor: "#fff",
    zIndex: 101,
  },
  wrap: {
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
}));

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

export default function Search() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxwidth={false} className={classes.wrap}>
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
      </Container>
    </div>
  );
}
