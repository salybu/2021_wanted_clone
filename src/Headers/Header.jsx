import React from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";

import { makeStyles } from "@material-ui/core";
import { useState } from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import Aside from "./Aside";
import SlideMenu from "./SlideMenu";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
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

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    slideMenuOpen: false,
    searchOpen: false,
  });

  // 탐색 메뉴 클릭 시, 하위 메뉴 show/hide 함수
  function showSlideMenu() {
    setState({ slideMenuOpen: true });
  }

  function hideSlideMenu() {
    setState({ slideMenuOpen: false });
  }

  // Aside 컴포넌트의 검색 아이콘 버튼 클릭 시, 하위 메뉴 show/hide 함수
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
          <Menu
            state={state}
            showSlideMenu={showSlideMenu}
            hideSlideMenu={hideSlideMenu}
          />
          <Aside showSearch={showSearch} />
        </Box>
        <Collapse in={state.slideMenuOpen}>
          <SlideMenu state={state.slideMenuOpen} />
        </Collapse>
      </Container>
      {state.searchOpen && <Search hideSearch={hideSearch} />}
    </div>
  );
}
