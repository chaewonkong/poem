import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";

class CreatePoem extends Component {
  state = {
    user: "",
    title: "",
    content: ""
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

  render() {
    return <div>{this.renderForm()}</div>;
  }
}
const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(CreatePoem);
