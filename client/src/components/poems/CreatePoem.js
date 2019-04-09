import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Tabs } from "antd";
import * as actions from "../../actions";
import ModalView from "../common/ModalView";
import PoemForm from "./PoemForm";
import "../../css/CreatePoem.css";

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0,
    type: "form"
  };

  componentDidMount() {}

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  renderForm = () => {
    if (this.props.auth.token === undefined) {
      return (
        <ModalView
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
      return <PoemForm variant="create" />;
    }
  };

  render() {
    return <Container>{this.renderForm()}</Container>;
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TabPane = styled(Tabs.TabPane)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth, today: state.today };
};

export default connect(
  mapStateToProps,
  actions
)(CreatePoem);
