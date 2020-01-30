import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "../../components/common";
import PoemForm from "../../components/poems/PostPoem/Form";
import PoemAlign from "../../components/poems/PostPoem/Align";
import PoemView from "../../components/poems/PostPoem/View";
import { color, media } from "../../config/_mixin";

class PostPoem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      title: "",
      content: "",
      variant: "create",
      type: "form",
      align: "left"
    };
  }

  componentDidMount() {
    if (this.props.location.pathname.match("/update") !== null) {
      this.setState({
        variant: "update",
        poemId: this.props.match.params.id
      });
    }
  }

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
              id={this.state.poemId}
              variant={this.state.variant}
              handleNext={this.handleNext.bind(this)}
              handlePrev={() => window.history.back()}
              title={this.state.title}
              content={this.state.content}
            />
          );
        case "align":
          return (
            <PoemAlign
              variant={this.state.variant}
              id={this.state.poemId || null}
              handleNext={this.handleNext.bind(this)}
              handlePrev={this.handleNext.bind(this)}
              title={this.state.title}
              content={this.state.content}
              align={this.state.align}
            />
          );
        case "view":
          return (
            <PoemView
              variant={this.state.variant}
              id={this.state.poemId || null}
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

export default PostPoem;
