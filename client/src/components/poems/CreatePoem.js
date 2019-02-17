import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";
import Typography from "@material-ui/core/Typography";
import { Tabs } from "antd";
import styles from "../../css/CreatePoem.module.css";

const TabPane = Tabs.TabPane;

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: "",
    value: 0
  };

  renderForm = free => {
    if (this.props.auth.token === undefined) {
      return <Redirect push to="/login" />;
    } else if (this.props.poems.post_success) {
      return <Redirect push to="/" />;
    } else {
      const { user, title, content } = this.state;
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
          <TabPane tab="길라잡이 모드" key="1" className={styles.tabStyle}>
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
          <TabPane tab="자유창작 모드" key="2" className={styles.tabStyle}>
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
    return <div className={styles.container}>{this.renderForm()}</div>;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(CreatePoem);
