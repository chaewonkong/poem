import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import UserMenu from "./users/UserMenu";
import LinearProgressBar from "./LinearProgressBar";
import "../css/Header.css";

class Header extends Component {
  state = {
    anchorEl: null,
    isLoading: this.props.isLoading
  };

  render() {
    const { anchorEl, isLoading } = this.state;

    return (
      <div className="nav-wrapper">
        <AppBar
          position="fixed"
          style={{
            background: "#B9F9F9",
            boxShadow: "none"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Toolbar className="toolbar">
              {this.props.nickname ? (
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon style={{ color: "#A4A4A4" }} />
                </IconButton>
              ) : (
                <Link to="/login">
                  <Typography variant="p" styles={{ color: "#A4A4A4" }}>
                    로그인
                  </Typography>
                </Link>
              )}
              <Link
                to="/"
                className="brand-logo"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="h6" style={{ color: "#A4A4A4" }}>
                  하루시작
                </Typography>
              </Link>
              <img
                alt="search"
                src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
              />
            </Toolbar>
          </div>
          {isLoading ? <LinearProgressBar /> : null}
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(
  mapStateToProps,
  actions
)(Header);
