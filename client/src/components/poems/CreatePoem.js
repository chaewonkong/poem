import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from "../../actions";
import { Modal } from "../common";
import PoemForm from "./PoemForm";
import PoemDetail from "./PoemDetail";
import PoemPublish from "./PoemPublish";
import { color, media } from "../../config/_mixin";

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0,
    type: "form",
    align: "left"
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleNext({ type, title, content, align }) {
    this.setState({ title, content, type, align });
  }

  renderForm = () => {
    if (this.props.auth.token === undefined) {
      return (
        <Modal
          width="240px"
          centered
          cancelText="아니요"
          okText="네"
          handleOk={() => (window.location.href = "/users/login")}
          handleCancel={() => (window.location.href = "/")}
          visible={true}
          footer={null}
          message="로그인이 필요한 서비스입니다. 로그인 하시겠습니까?"
        />
      );
    } else {
      switch (this.state.type) {
        case "form":
          return (
            <PoemForm
              variant={this.props.variant || "create"}
              handleNext={this.handleNext.bind(this)}
              handlePrev={() => window.history.back()}
              title={this.state.title}
              content={this.state.content}
            />
          );
        case "detail":
          return (
            <PoemDetail
              variant={this.props.variant || "create"}
              id={this.props.id || null}
              handleNext={this.handleNext.bind(this)}
              handlePrev={this.handleNext.bind(this)}
              title={this.state.title}
              content={this.state.content}
              align={this.state.align}
            />
          );
        case "publish":
          return (
            <PoemPublish
              variant={this.props.variant || "create"}
              id={this.props.id || null}
              handlePrev={this.handleNext.bind(this)}
              title={this.state.title}
              content={this.state.content}
              align={this.state.align}
            />
          );
        default:
          return (
            <PoemForm
              variant="create"
              handleClick={this.handleNext.bind(this)}
            />
          );
      }
    }
  };

  render() {
    return <Container type={this.state.type}>{this.renderForm()}</Container>;
  }
}

const Container = styled.div`
  ${media.desktop`width: 30vw`}
  ${media.mobile`width: 100vw`}
  padding-top: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${props =>
    props.type === "form" ? color.backgroundColor : color.lightGreyColor};
`;

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth, today: state.today };
};

export default connect(
  mapStateToProps,
  actions
)(CreatePoem);
