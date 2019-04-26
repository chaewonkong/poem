import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import * as actions from "../actions";
import LoginForm from "./auth/LoginForm";
import CreateUser from "./auth/CreateUser";
import UpdateUser from "./auth/UpdateUser";
import PoemList from "./poems/PoemList";
import UserDetail from "./users/UserDetail";
import PostPoem from "./poems/PostPoem";
import "../favicon.ico";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("TOKEN");
    if (token && token.length) this.fetchUser(token);
  }

  async fetchUser(token) {
    const res = await axios.get(
      "https://mighty-chamber-86168.herokuapp.com/users/current-user/",
      {
        headers: {
          Authorization: token
        }
      }
    );
    this.props.fetchUser({ ...res.data, token });
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Container>
            <BodyContainer>
              <Route exact path="/" component={PoemList} />
              <Route exact path="/poems/new" component={PostPoem} />
              <Route exact path="/poems/:id/update" component={PostPoem} />
              <Route path="/users/login" component={LoginForm} />
              <Route exact path="/users/new" component={CreateUser} />
              <Route
                exact
                path="/users/:userId/update"
                component={UpdateUser}
              />
              <Route
                exact
                path="/users/:userId/detail"
                component={UserDetail}
              />
            </BodyContainer>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (orientation: landscape) {
    width: 30vw;
  }
`;

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  actions
)(App);
