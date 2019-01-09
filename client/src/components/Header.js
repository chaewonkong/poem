import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              하루시作
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">어제의 베스트</a>
              </li>
              <li>
                <a href="badges.html">내 정보</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}

export { Header };
