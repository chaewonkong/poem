import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LoginForm from "../../Routes/LoginForm";
import CreateUser from "../../Routes/CreateUser";
import UpdateUser from "../../Routes/UpdateUser";
import PoemList from "../../Routes/PoemList";
import UserDetail from "../../Routes/UserDetail";
import PostPoem from "../../Routes/PostPoem";
import "../../favicon.ico";

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
        <Container>
          <BodyContainer>
            <Route exact path="/" component={PoemList} />
            <Route exact path="/poems/new" component={PostPoem} />
            <Route exact path="/poems/:id/update" component={PostPoem} />
            <Route path="/users/login" component={LoginForm} />
            <Route exact path="/users/new" component={CreateUser} />
            <Route exact path="/users/:userId/update" component={UpdateUser} />
            <Route exact path="/users/:userId/detail" component={UserDetail} />
          </BodyContainer>
        </Container>
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

export default App;
