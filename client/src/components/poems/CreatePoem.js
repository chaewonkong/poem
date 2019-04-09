import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { Tabs } from "antd";
import { Button } from "antd";
import * as actions from "../../actions";
import ModalView from "../common/ModalView";
import PoemForm from "./PoemForm";
import "../../css/CreatePoem.css";

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0
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
      const { user, content } = this.state;
      const { guide_format, subject } = this.props.today
        ? this.props.today
        : "꽃";
      return (
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          tabBarStyle={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "'Jeju Myeongjo', serif",
            color: "#707070"
          }}
        >
          <TabPane tab="길라잡이 모드" key="1">
            <h3>{subject}</h3>
            <p style={{ fontSize: 20, color: "#ABABAB" }}>{guide_format}</p>
            <PoemForm
              variant="create"
              user={user}
              showTheme={false}
              content={content}
            />
          </TabPane>
          <TabPane tab="자유창작 모드" key="2" className="tabStyle">
            <h3>{subject}</h3>
            <PoemForm
              variant="create"
              user={user}
              showTheme={true}
              content={content}
            />
          </TabPane>
        </Tabs>
      );
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
