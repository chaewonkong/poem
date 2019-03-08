import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import * as actions from "../actions";
// import Footer from "./Footer";
import Header from "./Header";
import CustomHeader from "./CustomHeader";
import LoginForm from "./users/LoginForm";
import CreatePoem from "./poems/CreatePoem";
import UpdatePoem from "./poems/UpdatePoem";
import CreateUser from "./users/CreateUser";
import UpdateUser from "./users/UpdateUser";
import PoemList from "./poems/PoemList";
import UserDetail from "./users/UserDetail";
import theme from "../css/theme";
import "../css/App.css";
import "../favicon.ico";

const GlobalStyle = createGlobalStyle`
  @import '~antd/dist/antd.css';
  @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

  h1, h2, h3, h4, h5, h6, p, span {
      font-family: 'Jeju Myeongjo', serif !important;
  }
  html, body {
      background: #F7F7F7;
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
              <HeaderContainer>
                <Header />
              </HeaderContainer>
              <BodyContainer>
                <Route exact path="/" component={PoemList} />
                <Route path="/poems/new" component={CreatePoem} />
                <Route path="/poems/update" component={UpdatePoem} />
                <Route path="/login" component={LoginForm} />
                <Route path="/create_user" component={CreateUser} />
                <Route path="/update_user" component={UpdateUser} />
                <Route path="/user_detail" component={UserDetail} />
              </BodyContainer>
              {/* <div style={footerStyle}>
            <Footer />
          </div> */}
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

const HeaderContainer = styled.div`
  flex: 1;
`;

const BodyContainer = styled.div`
  flex: 8;
  padding-top: 10vh;
  /* padding-bottom: 10vh; */
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
