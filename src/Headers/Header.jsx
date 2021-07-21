import React from "react";
import { useState } from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import Aside from "./Aside";
import SlideMenu from "./SlideMenu";
import Search from "./Search";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
// import HeaderContext from "../contexts/HeaderContext";
import Collapse from "@material-ui/core/Collapse";

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
    padding: 0,
  },
  wrap: {
    position: "fixed",
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 100,
  },
}));

// export const HeaderContext = React.createContext({});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    slideMenuOpen: false,
    searchOpen: false,
  });

  function slideMenu() {
    setState((state) => {
      return {
        slideMenuOpen: !state.slideMenuOpen,
      };
    });
  }

  function showSlideMenu() {
    setState({ slideMenuOpen: true });
  }

  function hideSlideMenu() {
    setState({ slideMenuOpen: false });
  }

  function showSearch() {
    setState({ searchOpen: true });
  }

  function hideSearch() {
    setState({ searchOpen: false });
  }

  return (
    <div className={classes.wrap}>
      <Container maxwidth={false} className={classes.root}>
        <Box
          display="flex"
          justifyContent="space-between"
          style={{ height: 50 }}
        >
          <Logo />
          {/* <Menu state={state} setState={slideMenu} /> */}
          <Menu
            state={state}
            showSlideMenu={showSlideMenu}
            hideSlideMenu={hideSlideMenu}
          />
          <Aside showSearch={showSearch} />
        </Box>
        <Collapse in={state.slideMenuOpen}>
          {/* {state.slideMenuOpen && <SlideMenu state={state.slideMenuOpen} />} */}
          <SlideMenu state={state.slideMenuOpen} />
        </Collapse>
      </Container>
      {state.searchOpen && <Search hideSearch={hideSearch} />}
    </div>
  );
}
