import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import SubjectRoundedIcon from "@material-ui/icons/SubjectRounded";
import ProfileImg from "../avatar.jpg";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const alarmList = [
  {
    category: "커리어 성장",
    contents:
      "Wanted Talk Engineering: 테스트 코드와 배포 시스템 신청이 완료되었습니다. \n이벤트에 대한 추가 안내사항은 이메일 또는 SMS 로 별도 연락드릴 예정입니다.",
    date: "오후 02:25",
  },
  {
    category: "공지",
    contents:
      "‘추천’이 MY 원티드로 이동하였습니다! \n앞으로도 계속 좋은 사람을 추천하고, 추천 받아보세요.",
    date: "2021.07.07 (수)",
  },
  {
    category: "공지",
    contents:
      '개인정보 처리방침이 개정되었습니다.(시행일자 : 2021.07.01) \n변경사유 : 위탁업체 변경, 해외 보관 삭제 등 사이트 하단 링크, 또는 앱 내 "설정"에서 확인',
    date: "2021.06.24 (목)",
  },
  {
    category: "커리어 성장",
    contents:
      "걸스인텍 #StartHerSuccess: Zero To One 신청이 완료되었습니다. \n이벤트에 대한 추가 안내사항은 이메일 또는 SMS로 별도 연락드릴 예정입니다",
    date: "2021.06.11 (금)",
  },
];

const profileMenuList = [
  "MY 원티드",
  "프로필",
  "지원 현황",
  "제안받기 현황",
  "좋아요",
  "북마크",
  "추천",
  "포인트",
];

const ProfileButton = withStyles({
  root: {
    maxWidth: 32,
    minWidth: 32,
    height: 32,
    border: "1px solid #e1e2e3",
    borderRadius: 16,
  },
})(Button);

const NewBadge = withStyles((theme) => ({
  badge: {
    padding: "0 4px",
    backgroundColor: "#3366FF",
    color: "#f8f8fa",
    fontSize: 7,
    fontWeight: 600,
    top: 3,
    right: 2,
    height: 15,
    minWidth: 11,
  },
}))(Badge);

const MyBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#3366FF",
    height: 5,
    minWidth: 5,
  },
}))(Badge);

const CorpButton = withStyles({
  root: {
    width: 90,
    height: 30,
    border: "1px solid #e1e2e3",
    borderRadius: 20,
    fontSize: 13,
    float: "right",
  },
})(Button);

const AlarmMenu = withStyles({
  paper: {
    // border: "1px solid #cdcdcd",
    borderRadius: 15,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const ProfileMenu = withStyles({
  paper: {
    width: "192px",
    maxHeight: "415px",
    // border: "1px solid #cdcdcd",
    borderRadius: 15,
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    "& ul.MuiList-root": {
      padding: "14px 0 0 0",
    },
    "& li.MuiDivider-root": {
      height: 0.3,
      margin: "9px 7px",
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const ProfileMenuItem = withStyles(() => ({
  root: {
    justifyContent: "center",
    fontSize: 14,
    color: "#333333",
    padding: 8,
  },
}))(MenuItem);

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 690,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  iconButton: {
    // disableFocusRipple: true,
    // disableRipple: true,
    // disabled: true,
    padding: 5,
  },
  iconButtonMobile: {
    minWidth: 20,
    height: 20,
    padding: "0 5px",
  },
  corpService: {
    display: "flex",
    width: 127,
    justifyContent: "space-between",
    "&::before": {
      // display: "block",
      content: "''",
      minWidth: 1,
      maxWidth: 1,
      minHeight: 10,
      maxHeight: 10,
      backgroundColor: "#e1e2e3",
      margin: "10px 10px 10px 20px",
    },
  },
  alarmMenuWrap: {
    margin: 0,
    width: "360px",
    maxHeight: "598px",
    backgroundColor: theme.palette.background.paper,
    "& .MuiDivider-root": {
      margin: "0 3px",
    },
  },
  alarmMenuText: {
    "& .MuiListItemText-primary": {
      "& div": {
        textAlign: "left",
        marginBottom: 6,
        "&:first-child": {
          color: "#3a68f9",
          fontSize: 12,
        },
        "&:nth-child(2)": {
          color: "#111111",
          fontSize: 14,
        },
        "&:nth-child(3)": {
          margin: "4px 0 0 0",
          color: "#767676",
          fontSize: 12,
        },
      },
    },
  },
}));

export default function Aside(props) {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const showAllMenu = useMediaQuery("(min-width:770px)");

  const [state, setState] = useState({
    alarmAnchorEl: null,
    profileAnchorEl: null,
  });
  const alarmOpen = (event) => {
    setState({ alarmAnchorEl: event.currentTarget });
  };

  const alarmClose = () => {
    setState({ alarmAnchorEl: null });
  };

  const profileOpen = (event) => {
    setState({ profileAnchorEl: event.currentTarget });
  };

  const profileClose = () => {
    setState({ profileAnchorEl: null });
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "9px 0px" }}>
        {console.log(theme.breakpoints)}
        {showAllMenu ? (
          <Box display="flex" style={{ width: 260 }}>
            <IconButton
              className={classes.iconButton}
              onClick={props.showSearch}
            >
              <SearchRoundedIcon />
            </IconButton>
            <IconButton className={classes.iconButton} onClick={alarmOpen}>
              <NotificationsNoneRoundedIcon />
            </IconButton>
            <AlarmMenu
              id="alarm-menu"
              // anchorEl={anchorEl}
              anchorEl={state.alarmAnchorEl}
              keepMounted
              // open={Boolean(anchorEl)}
              open={Boolean(state.alarmAnchorEl)}
              onClose={alarmClose}
            >
              <List className={classes.alarmMenuWrap}>
                {alarmList.map((alarm, index) => (
                  <React.Fragment>
                    <ListItem alignItems="flex-start">
                      <Button>
                        <ListItemText
                          className={classes.alarmMenuText}
                          primary={
                            <React.Fragment>
                              <div>{alarm.category}</div>
                              <div>{alarm.contents}</div>
                              <div>{alarm.date}</div>
                            </React.Fragment>
                          }
                        />
                      </Button>
                    </ListItem>
                    {alarmList[index + 1] && ( // 마지막 구분선 생략
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </AlarmMenu>
            <div style={{ width: 35, marginLeft: 8 }}>
              <ProfileButton onClick={profileOpen}>
                <NewBadge badgeContent="N">
                  <Avatar
                    src={ProfileImg}
                    style={{ borderRadius: 20, width: 28, height: 28 }}
                  />
                </NewBadge>
              </ProfileButton>
              <ProfileMenu
                id="profile-menu"
                anchorEl={state.profileAnchorEl}
                keepMounted
                open={Boolean(state.profileAnchorEl)}
                onClose={profileClose}
              >
                {profileMenuList.map((profileMenu, index) => (
                  <React.Fragment>
                    {index == 0 ? (
                      <ProfileMenuItem>
                        <MyBadge color="secondary" variant="dot">
                          {profileMenu}
                        </MyBadge>
                      </ProfileMenuItem>
                    ) : (
                      <ProfileMenuItem>{profileMenu}</ProfileMenuItem>
                    )}
                    {(index == 1 || index == 5) && (
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                ))}
                <ProfileMenuItem
                  style={{
                    height: 50,
                    backgroundColor: "#f7f7f7",
                    marginTop: 9,
                  }}
                >
                  로그아웃
                </ProfileMenuItem>
              </ProfileMenu>
            </div>
            <div className={classes.corpService}>
              <CorpButton>기업 서비스</CorpButton>
            </div>
          </Box>
        ) : (
          <Box
            display="flex"
            style={{
              width: 124,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              className={classes.iconButtonMobile}
              onClick={props.showSearch}
            >
              <SearchRoundedIcon />
            </IconButton>
            <IconButton
              className={classes.iconButtonMobile}
              onClick={alarmOpen}
            >
              <NotificationsNoneRoundedIcon />
            </IconButton>
            <IconButton
              className={classes.iconButtonMobile}
              style={{ marginRight: 10 }}
            >
              <SubjectRoundedIcon />
            </IconButton>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}
