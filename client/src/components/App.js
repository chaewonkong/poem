import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Footer } from "./";
import Header from "./Header";
import LoginForm from "./LoginForm";
import CreatePoem from "./CreatePoem";
import CreateUserForm from "./CreateUserForm";
import PoemList from "./PoemList";
import "../css/App.css";
import "../favicon.ico";

class App extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="main">
              <Route exact path="/" component={PoemList} />
              <Route path="/poems/new" component={CreatePoem} />
              <Route path="/login" component={LoginForm} />
              <Route path="/create_user" component={CreateUserForm} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.auth;
};
export default connect(
  mapStateToProps,
  actions
)(App);
