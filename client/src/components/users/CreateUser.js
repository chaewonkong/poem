import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import DefaultHeader from "../DefaultHeader";
import UserForm from "./UserForm";

class CreateUser extends Component {
  render() {
    return (
      <div>
        <DefaultHeader />
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
)(CreateUser);
