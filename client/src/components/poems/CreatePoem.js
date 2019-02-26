import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";
import Typography from "@material-ui/core/Typography";
import { Tabs } from "antd";
import "../../css/CreatePoem.css";
import { Modal, Button } from "antd";

const TabPane = Tabs.TabPane;

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0,
    visible: true
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
    // return <Redirect push to="/login" />;
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  renderForm = free => {
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
        >
          <p>
            로그인이 필요한 서비스입니다. <br /> 로그인 하시겠습니까?
          </p>
        </Modal>
      );
    } else if (this.props.poems.redirect) {
      return <Redirect push to={this.props.poems.redirect} />;
    } else {
      const { user, content } = this.state;
      return (
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarStyle={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "'Jeju Myeongjo', serif",
            color: "#707070"
          }}
        >
          <TabPane tab="길라잡이 모드" key="1" className="tabStyle">
            <Typography variant="h6" style={{ color: "#707070" }}>
              글감
            </Typography>
            <p style={{ fontSize: 20, color: "#ABABAB" }}>
              자세히 보아야 예쁘다.
              <br /> 오래 보아야 사랑스럽다. <br />
              너도 그렇다. <br />
              <br />
              나태주, "들꽃"
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

  handleChange = () => {};
  callback = () => {};
  render() {
    return <div className="container">{this.renderForm()}</div>;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(CreatePoem);
