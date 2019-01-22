import React, { Component } from "react";
import axios from "axios";
import uuidv1 from "uuid/v1";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../css/LoginForm.module.css";
import CreateUserForm from "./CreateUserForm";

class LoginForm extends Component {
  handleSignin() {
    const identifier = uuidv1();
    console.log(identifier);
    axios
      .post("https://mighty-chamber-86168.herokuapp.com/poets/", {
        nickname: "철구",
        password_conf: "kong4616",
        password: "kong4616",
        identifier: "1asdjfkl1"
      })
      .then(console.log("Success"));
  }
  render() {
    return (
      <div>
        <div className={styles.inputContainer}>
          <Typography variant="h5" color="textPrimary">
            로그인
          </Typography>
          <TextField
            required
            label="id"
            placeholder="user@user.com"
            type="email"
          />
          <TextField
            required
            label="password"
            placeholder="password"
            type="password"
          />
        </div>
        <div className={styles.loginBtn}>
          <Button color="primary" variant="outlined">
            로그인
          </Button>
          <Link
            to="/create_user"
            component={CreateUserForm}
            style={{ textDecoration: "none" }}
          >
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
    );
  }
}

export { LoginForm };
