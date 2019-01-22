import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../css/Header.css";

class Header extends Component {
  render() {
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
              <div>{this.props.nickname}</div>
            ) : (
              <Link
                to="/login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(Header);
