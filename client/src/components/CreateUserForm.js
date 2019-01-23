import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import * as actions from "../actions";
import Button from "@material-ui/core/Button";

class CreateUserForm extends Component {
  state = { identifier: "", nickname: "", password: "", passwordConf: "" };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCreateUser = () => {
    const { identifier, nickname, password, passwordConf } = this.state;
    if (password === passwordConf) {
      this.props.createUser({ identifier, nickname, password });
    } else alert("비밀번호를 확인하세요");
  };
  render() {
    return (
      <div>
        {this.props.auth.redirect ? (
          <Redirect push to={this.props.auth.redirect} />
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                name="identifier"
                required
                label="id"
                placeholder="k0000"
                onChange={this.handleChange}
              />
              <TextField
                name="nickname"
                required
                label="별명"
                placeholder="숭어다랑어"
                onChange={this.handleChange}
              />
              <TextField
                name="password"
                pattern="[0-9a-z]"
                required
                type="password"
                label="비밀번호"
                placeholder="알파벳 소문자/숫자"
                onChange={this.handleChange}
              />
              <TextField
                name="passwordConf"
                required
                type="password"
                label="비밀번호 확인"
                placeholder="알파벳 소문자/숫자"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Button
                color="primary"
                onClick={this.handleCreateUser}
                variant="outlined"
              >
                회원가입하기
              </Button>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button color="secondary" variant="outlined">
                  취소
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  actions
)(CreateUserForm);
