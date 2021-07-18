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

const MyButton = withStyles({
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

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "9px 0px" }}>
        <Box display="flex" style={{ width: 260 }}>
          <IconButton className={classes.iconButton} onClick={props.showSearch}>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <div style={{ width: 35, marginLeft: 8 }}>
            <MyButton>
              <Badge badgeContent={4} color="primary">
                <Avatar
                  src={ProfileImg}
                  style={{ borderRadius: 20, width: 28, height: 28 }}
                />
              </Badge>
            </MyButton>
          </div>
          <div className={classes.corpService}>
            <CorpButton>기업 서비스</CorpButton>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}
