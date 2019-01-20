import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to="/"
              className="brand-logo"
              style={{ textDecoration: "none" }}
            >
              <Typography color="primary" variant="h4">
                하루시作
              </Typography>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export { Header };
