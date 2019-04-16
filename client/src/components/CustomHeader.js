import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontFamily, media } from "../config/_mixin";

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { leftIcon: <LeftIcon />, rightIcon: <RightIcon /> };
  }

  componentDidMount() {
    if (this.props.leftIcon) this.setState({ leftIcon: this.props.leftIcon });
    if (this.props.rightIcon)
      this.setState({ rightIcon: this.props.rightIcon });
  }

  render() {
    const { leftIcon, rightIcon } = this.state;
    return (
      <HeaderContainer>
        <Header>
          {this.props.children ? (
            this.props.children
          ) : (
            <Fragment>
              <NavButton onClick={this.props.handleLeft}>
                {leftIcon ? leftIcon : <LeftIcon />}
              </NavButton>
              <Link to="">
                <Title>{this.props.title}</Title>
              </Link>
              <NavButton onClick={this.props.handleRight}>
                {rightIcon ? rightIcon : <RightIcon />}
              </NavButton>
            </Fragment>
          )}
        </Header>
      </HeaderContainer>
    );
  }
}

const leftIconImage =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg";
const rightIconImage =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.svg";

const LeftIcon = () => <img alt="left-icon" src={leftIconImage} />;
const RightIcon = () => <img alt="right-icon" src={rightIconImage} />;

const NavButton = styled.div`
  cursor: pointer;
`;

const Title = styled.h1`
  color: ${color.darkGreyColor};
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
  font-family: ${fontFamily.default};
  z-index: 10;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.desktop`width: 30vw`}
  ${media.mobile`width: 90vw`}
`;

export default CustomHeader;
