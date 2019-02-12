import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";
import { Typography } from "@material-ui/core/Typography";
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

  renderForm = () => {
    if (this.props.auth.token === undefined) {
      return <Redirect push to="/login" />;
    } else if (this.props.poems.post_success) {
      return <Redirect push to="/" />;
    } else {
      const { user, title, content } = this.state;
      return <PoemForm user={user} title={title} content={content} />;
    }
  };

  handleChange = () => {};
  callback = () => {};
  render() {
    return (
      <div className={styles.container}>
        <Tabs
          defaultActiveKey="1"
          onChange={this.callback}
          tabBarStyle={{
            display: "flex",

            justifyContent: "center"
          }}
        >
          <TabPane
            tab="길라잡이 모드"
            key="1"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {this.renderForm()}
          </TabPane>
          <TabPane tab="자유창작 모드" key="2">
            공백
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
// const styles = {
//   container: {
//     display: "flex",
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "center"
//   }
// };
const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(CreatePoem);
