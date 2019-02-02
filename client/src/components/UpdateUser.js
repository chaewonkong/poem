import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import UserForm from "./UserForm";

class UpdateUser extends Component {
  render() {
    return (
      <div>
        {this.props.auth.redirect ? (
          <Redirect push to={this.props.auth.redirect} />
        ) : (
          <UserForm />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  actions
)(UpdateUser);
