import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import * as actions from "../../actions";

class ReactionBtn extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      visible: this.props.visible
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        visible: this.props.visible
      });
    }
  }

  handleReactionToggle = () => {
    if (this.props.type === "do_like") {
      if (this.props.token) {
        const { token, id } = this.props;
        this.props.likePoem({ token, id });
      }
    } else {
      if (this.props.token) {
        const { token, id } = this.props;
        this.props.dislikePoem({ token, id });
      }
    }
  };

  renderImgType() {
    if (this.props.type === "do_like") {
      return (
        <img
          alt="different"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
        />
      );
    } else {
      return (
        <img
          alt="different"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
        />
      );
    }
  }

  render() {
    const { visible, type } = this.props;
    return (
      <Container>
        <Highlight visible={visible} />
        <ButtonContainer>
          {this.renderImgType()}
          <Button onClick={this.handleReactionToggle}>
            {type === "do_like" ? "좋아요" : "달라요"}
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-right: 1px solid ${props => props.theme.defaultColor};
  }
`;

const Highlight = styled.div`
  ${props => {
    if (props.visible) {
      return css`
        display: flex;
        position: absolute;
        width: 150px;
        height: 30px;
        justify-content: center;
        border-radius: 3vw;
        background: #8ef5f8;
        opacity: 0.5;
      `;
    }
  }}
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  z-index: 10;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.darkGreyColor};
`;

export default connect(
  mapStateToProps,
  actions
)(ReactionBtn);
