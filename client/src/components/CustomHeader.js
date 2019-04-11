import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class CustomHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <Header>
          {this.props.children ? (
            this.props.children
          ) : (
            <Fragment>
              <NavButton
                src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
                onClick={this.props.handleLeft}
              />
              <Link to="">
                <Title>{this.props.title}</Title>
              </Link>
              <NavButton
                src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg"
                onClick={this.props.handleRight}
              />
            </Fragment>
          )}
        </Header>
      </HeaderContainer>
    );
  }
}

const NavButton = styled.img`
  cursor: pointer;
`;

const Title = styled.h1`
  color: ${props => props.theme.darkGreyColor};
  font-size: ${props => (props.size ? props.size : "1.2rem")};
  margin: 0.5rem;
  padding: 0;
`;

const HeaderContainer = styled.div`
  min-height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #b9f9f9;
  font-family: ${props => props.theme.fontFamily};
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media (orientation: landscape) {
    width: 30vw;
  }
`;

export default CustomHeader;
