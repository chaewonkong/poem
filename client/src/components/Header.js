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
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="sass.html">어제의 베스트</Link>
              </li>
              <li>
                <Link to="badges.html">내 정보</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="sass.html">어제의 베스트</Link>
          </li>
          <li>
            <Link to="badges.html">내 정보</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export { Header };
