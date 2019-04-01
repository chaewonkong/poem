import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PoemForm from "./PoemForm";

class UpdatePoem extends Component {
  render() {
    return <PoemForm variant="update" />;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(UpdatePoem);
