import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import * as actions from "../actions";
import CustomHeader from "./CustomHeader";
import UserMenu from "./users/UserMenu";
import Search from "./Search";
import "../css/Header.css";

class Header extends Component {
  state = {
    isLoading: this.props.isLoading,
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Bar position="fixed">
        <BarContainer>
          <CustomHeader>
            <Toolbar className="toolbar">
              {this.props.nickname ? (
                <UserMenu />
              ) : (
                <Link to="/login">
                  <Title size="1rem">로그인</Title>
                </Link>
              )}
              <Link to="/" className="brand-logo">
                <Title>하루시작</Title>
              </Link>
              <Button variant="text" onClick={this.handleOpen}>
                <img
                  alt="search"
                  src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
                />
              </Button>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
              >
                <SearchContainer>
                  <Search />
                </SearchContainer>
              </Modal>
            </Toolbar>
          </CustomHeader>
        </BarContainer>
      </Bar>
    );
  }
}

const mapStateToProps = state => state.auth;

const Bar = styled(AppBar)`
  background: ${props => props.theme.highlightColor};
  box-shadow: none;
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;
`;

const Title = styled.h1`
  color: ${props => props.theme.darkGreyColor};
  font-size: ${props => (props.size ? props.size : "1.2rem")};
  margin: 0.5rem;
  padding: 0;
`;

export default connect(
  mapStateToProps,
  actions
)(Header);
