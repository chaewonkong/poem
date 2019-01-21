import React, { Component } from "react";
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
      <AppBar position="fixed" color="#fff">
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Toolbar>
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
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}

export { Header };
