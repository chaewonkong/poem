import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

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

  render() {
    return (
      <div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            background: "#8EF5F8"
          }}
        >
          <Typography style={{ color: "#A4A4A4" }} variant="h6">
            길라잡이 모드
          </Typography>
          <Typography style={{ color: "#A4A4A4" }} variant="h6">
            자유창작 모드
          </Typography>
        </div> */}
        {this.renderForm()}
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
