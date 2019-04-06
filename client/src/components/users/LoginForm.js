import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DefaultHeader from "../DefaultHeader";
import styles from "../../css/LoginForm.module.css";
import * as actions from "../../actions";

class LoginForm extends Component {
  state = { identifier: "", password: "" };

  handleLogin = async () => {
    const { identifier, password } = this.state;
    const res = await axios.post(
      "https://mighty-chamber-86168.herokuapp.com/auth/login/",
      {
        identifier,
        password
      }
    );
    if (res.status === 200) {
      localStorage.setItem("TOKEN", res.data.token);
      window.location.href = "/";
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEnterSubmit(e) {
    if (e.key === "Enter") this.handleLogin();
  }

  render() {
    return (
      <div>
        <DefaultHeader />
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
                placeholder="user"
                type="text"
              />
              <TextField
                name="password"
                onChange={this.handleChange}
                required
                label="password"
                placeholder="password"
                type="password"
                onKeyPress={this.handleEnterSubmit.bind(this)}
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
              <Link to="/users/new" style={{ textDecoration: "none" }}>
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
