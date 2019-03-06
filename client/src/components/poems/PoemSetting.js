import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class PoemSetting extends Component {
  render() {
    return <div>Poem Title and Content</div>;
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  actions
)(PoemSetting);
