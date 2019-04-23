import React, { Component } from "react";
import { connect } from "react-redux";
import CreatePoem from "./CreatePoem";

class UpdatePoem extends Component {
  render() {
    const poemId = this.props.match.params.id;
    return <CreatePoem variant="update" id={poemId} />;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(UpdatePoem);
