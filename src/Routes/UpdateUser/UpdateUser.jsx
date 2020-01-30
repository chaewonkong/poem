import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { DefaultHeader } from "../../components/common";
import UserForm from "../../components/auth/UserForm";

class UpdateUser extends Component {
  state = {};
  componentDidMount() {
    const { nickname, image, pk, identifier } = this.props.auth;
    if (this.props.auth) {
      this.setState({
        nickname,
        image,
        pk,
        identifier
      });
    }
  }
  render() {
    const { pk, nickname, image, identifier } = this.state;
    return (
      <div>
        <DefaultHeader />
        {this.props.auth.redirect ? (
          <Redirect push to={this.props.auth.redirect} />
        ) : (
          <UserForm
            userId={pk}
            nickname={nickname}
            image={image}
            identifier={identifier}
            update={true}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, actions)(UpdateUser);
