import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";

class UpdatePoem extends Component {
  state = { id: "", token: "", title: "", content: "" };

  componentDidMount() {
    const { id, title, content } = this.props.poems;
    this.setState({
      id,
      token: this.props.auth.token,
      title,
      content
    });
  }

  renderForm = () => {
    if (this.props.poems.post_success) {
      return <Redirect push to="/" />;
    }
    return <PoemForm />;
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(UpdatePoem);
