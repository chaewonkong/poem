import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              하루시作
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export { Header };
