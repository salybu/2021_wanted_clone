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
import ProfileImg from "../avatar.jpg";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

const ProfileButton = withStyles({
  root: {
    maxWidth: 32,
    minWidth: 32,
    height: 32,
    border: "1px solid #e1e2e3",
    borderRadius: 16,
  },
})(Button);

const CorpButton = withStyles({
  root: {
    width: 90,
    height: 30,
    border: "1px solid #e1e2e3",
    borderRadius: 20,
    fontSize: 13,
    float: "right",
    "&::before": {
      // display: "block",
      content: "",
      width: 4,
      height: 10,
      backgroundColor: "#e1e2e3",
      margin: "auto 10px",
    },
  },
})(Button);

const AlarmMenu = withStyles({
  paper: {
    border: "1px solid #cdcdcd",
    borderRadius: 15,
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

const useStyles = makeStyles((theme) => ({
  iconButton: {
    // disableFocusRipple: true,
    // disableRipple: true,
    // disabled: true,
    padding: 5,
  },
  corpService: {
    width: 127,
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

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
});

export default function Aside(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "9px 0px" }}>
        <Box display="flex" style={{ width: 260 }}>
          <IconButton className={classes.iconButton} onClick={props.showSearch}>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={handleClick}>
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <AlarmMenu
            className={classes.menu}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
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
                  {alarmList[index + 1] && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          </AlarmMenu>
          <div style={{ width: 35, marginLeft: 8 }}>
            <ProfileButton>
              <Badge badgeContent={4} color="primary">
                <Avatar
                  src={ProfileImg}
                  style={{ borderRadius: 20, width: 28, height: 28 }}
                />
              </Badge>
            </ProfileButton>
          </div>
          <div className={classes.corpService}>
            <CorpButton>기업 서비스</CorpButton>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}
