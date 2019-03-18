import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";

class UpdatePoem extends Component {
  renderForm = () => {
    if (this.props.poems.redirect) {
      return <Redirect push to={this.props.poems.redirect} />;
    }
    return <PoemForm variant="update" />;
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(UpdatePoem);
