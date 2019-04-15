import React, { Component } from "react";
import { connect } from "react-redux";
// import PoemForm from "./PoemForm";
import CreatePoem from "./CreatePoem";

class UpdatePoem extends Component {
  render() {
    let path = this.props.location.pathname
      .replace("/poems/", "")
      .replace("/update", "");
    return <CreatePoem variant="update" id={path} />;
  }
}

const mapStateToProps = state => {
  return { poems: state.poems, auth: state.auth };
};

export default connect(mapStateToProps)(UpdatePoem);
