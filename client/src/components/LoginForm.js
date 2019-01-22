import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../css/LoginForm.module.css";
import * as actions from "../actions";

class LoginForm extends Component {
  state = { identifier: "", password: "" };
  handleLogin = () => {
    const { identifier, password } = this.state;
    this.props.loginUser({ identifier, password });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {/* {this.props.redirect ? (<Redirect push to="/" />) : ( */}
        {this.props.redirect ? (
          <Redirect push to={this.props.redirect} />
        ) : (
          <div>
            <div className={styles.inputContainer}>
              <Typography variant="h5" color="textPrimary">
                로그인
              </Typography>
              <TextField
                name="identifier"
                onChange={this.handleChange}
                required
                label="id"
                placeholder="user@user.com"
                type="email"
              />
              <TextField
                name="password"
                onChange={this.handleChange}
                required
                label="password"
                placeholder="password"
                type="password"
              />
            </div>
            <div className={styles.loginBtn}>
              <Button
                color="primary"
                variant="outlined"
                onClick={this.handleLogin}
              >
                로그인
              </Button>
              <Link to="/create_user" style={{ textDecoration: "none" }}>
                <Button
                  color="default"
                  onClick={this.handleSignin}
                  variant="outlined"
                >
                  회원가입
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state.auth;
export default connect(
  mapStateToProps,
  actions
)(LoginForm);
