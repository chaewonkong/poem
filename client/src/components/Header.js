import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import UserMenu from "./users/UserMenu";
import LinearProgressBar from "./LinearProgressBar";
import Search from "./Search";
import "../css/Header.css";

class Header extends Component {
  state = {
    isLoading: this.props.isLoading,
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { isLoading, open } = this.state;

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
                <UserMenu />
              ) : (
                <Link to="/login">
                  <Typography component="p" styles={{ color: "#707070" }}>
                    로그인
                  </Typography>
                </Link>
              )}
              <Link
                to="/"
                className="brand-logo"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="h6" style={{ color: "#707070" }}>
                  하루시작
                </Typography>
              </Link>

              {/* <div style={{ display: "flex", alignItems: "center" }}> */}
              <Button variant="text" onClick={this.handleOpen}>
                <img
                  alt="search"
                  src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
                />
              </Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "1vh"
                  }}
                >
                  <Search />
                </div>
              </Modal>
              {/* </div> */}
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
