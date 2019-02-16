import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "./users/LoginForm";
import CreatePoem from "./poems/CreatePoem";
import UpdatePoem from "./poems/UpdatePoem";
import CreateUser from "./users/CreateUser";
import UpdateUser from "./users/UpdateUser";
import PoemList from "./poems/PoemList";
import "../css/App.css";
import "../favicon.ico";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("TOKEN");
    if (token) this.props.fetchUser(token);
  }

  render() {
    console.log(this.props);
    const { container, headerStyle, bodyStyle } = styles;
    return (
      <BrowserRouter>
        <div style={container}>
          <div style={headerStyle}>
            <Header />
          </div>
          <div className="main" style={bodyStyle}>
            <Route exact path="/" component={PoemList} />
            <Route path="/poems/new" component={CreatePoem} />
            <Route path="/poems/update" component={UpdatePoem} />
            <Route path="/login" component={LoginForm} />
            <Route path="/create_user" component={CreateUser} />
            <Route path="/update_user" component={UpdateUser} />
          </div>
          {/* <div style={footerStyle}>
            <Footer />
          </div> */}
        </div>
      </BrowserRouter>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  headerStyle: {
    flex: 1
  },
  bodyStyle: {
    flex: 8
  }
  // footerStyle: {
  //   flex: 1
  // }
};

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  actions
)(App);
