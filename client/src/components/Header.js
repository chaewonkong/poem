import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import "../css/Header.css";

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <AppBar position="fixed" color="inherit">
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Toolbar className="toolbar">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Link
              to="/"
              className="brand-logo"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" color="secondary">
                하루시作
              </Typography>
            </Link>
            {this.props.nickname ? (
              <div>
                <div>
                  <Button
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <Avatar src={this.props.image} alt={this.props.nickname} />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>내 정보</MenuItem>
                    <MenuItem onClick={this.handleLogout}>로그아웃</MenuItem>
                  </Menu>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button color="inherit">로그인</Button>
              </Link>
            )}
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(
  mapStateToProps,
  actions
)(Header);
