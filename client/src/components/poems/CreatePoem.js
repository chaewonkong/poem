import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Tabs } from "antd";
import { Modal, Button } from "antd";
import * as actions from "../../actions";
import CustomHeader from "../CustomHeader";
import PoemForm from "./PoemForm";
import "../../css/CreatePoem.css";

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0,
    visible: true
  };

  componentDidMount() {}

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  renderForm = () => {
    if (this.props.auth.token === undefined) {
      return (
        <Modal
          className="modal"
          width="240px"
          centered
          cancelText="아니요"
          okText="네"
          closable={false}
          okButtonProps={{
            type: "default",
            href: "/login"
          }}
          cancelButtonProps={{ type: "default", href: "/" }}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>
            로그인이 필요한 서비스입니다. <br /> 로그인 하시겠습니까?
          </p>
          <div className="modal-div">
            <Button className="modal-btn" onClick={this.handleOk}>
              <Link to="/">아니오</Link>
            </Button>
            <Button className="modal-btn" onClick={this.handleCancel}>
              <Link to="/login">예</Link>
            </Button>
          </div>
        </Modal>
      );
    } else if (this.props.poems.redirect) {
      return <Redirect push to={this.props.poems.redirect} />;
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
            <p style={{ fontSize: 20, color: "#ABABAB" }}>
              {/* 자세히 보아야 예쁘다.
              <br /> 오래 보아야 사랑스럽다. <br />
              너도 그렇다. <br />
              <br />
              나태주, "들꽃" */}
              {guide_format}
            </p>
            <PoemForm
              variant="create"
              user={user}
              showTheme={false}
              content={content}
            />
          </TabPane>
          <TabPane tab="자유창작 모드" key="2" className="tabStyle">
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
    return (
      <Container>
        <CustomHeader />
        {this.renderForm()}
      </Container>
    );
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
