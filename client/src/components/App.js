import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import * as actions from "../actions";
// import Footer from "./Footer";
import LoginForm from "./users/LoginForm";
import CreatePoem from "./poems/CreatePoem";
import UpdatePoem from "./poems/UpdatePoem";
import CreateUser from "./users/CreateUser";
import UpdateUser from "./users/UpdateUser";
import PoemList from "./poems/PoemList";
import UserDetail from "./users/UserDetail";
import theme from "../css/theme";
import "../favicon.ico";
import "../css/App.css";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("TOKEN");
    if (token) this.props.fetchUser(token);
  }

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Container>
              {/* <HeaderContainer>
                <DefaultHeader />
              </HeaderContainer> */}
              <BodyContainer>
                <Route exact path="/" component={PoemList} />
                <Route exact path="/poems/new" component={CreatePoem} />
                <Route exact path="/poems/:id/update" component={UpdatePoem} />
                <Route path="/login" component={LoginForm} />
                <Route exact path="/users/new" component={CreateUser} />
                <Route
                  exact
                  path="/users//:userId/update"
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
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  padding-top: 10vh;
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
