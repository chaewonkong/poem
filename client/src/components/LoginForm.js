import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../css/LoginForm.module.css";

const LoginForm = () => {
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
        <Button color="default" variant="outlined">
          회원가입
        </Button>
      </div>
    </div>
  );
};

export { LoginForm };
