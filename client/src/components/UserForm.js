import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions";

class UserForm extends Component {
  state = {
    identifier: "",
    nickname: "",
    password: "",
    passwordConf: "",
    selectedFile: null,
    update: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const { identifier, nickname, image, userId, update } = this.props;
      this.setState({
        ...this.state,
        identifier,
        userId,
        nickname,
        image,
        update
      });
    }
  }

  handleChange = e => {
    if (e.target.name === "password" || e.target.name === "passwordConf") {
      this.setState({
        [e.target.name]: e.target.value.toLowerCase()
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleUpload = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleCreateUser = () => {
    const { identifier, nickname, password, passwordConf, image } = this.state;
    if (password === passwordConf) {
      const data = new FormData();
      data.append("identifier", identifier);
      data.append("nickname", nickname);
      data.append("password", password);
      data.append("password_conf", passwordConf);
      data.append("image", image);
      this.props.createUser(data);
    } else alert("비밀번호를 확인하세요");
  };
  handleUpdateUser = () => {
    const { userId, image, nickname, password, identifier } = this.state;
    this.props.updateUser({
      userId,
      nickname,
      password,
      image,
      identifier,
      token: this.props.auth.token
    });
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            name="identifier"
            required
            label="id"
            placeholder="k0000"
            onChange={this.handleChange}
            value={this.state.identifier}
          />
          <TextField
            name="nickname"
            required
            label="별명"
            placeholder="숭어다랑어"
            onChange={this.handleChange}
            value={this.state.nickname}
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
          <div>
            <Typography color="textSecondary" variant="h6">
              프로필 사진
            </Typography>
            {/* <Avatar /> */}
            <input type="file" onChange={this.handleUpload} />
          </div>
        </div>
        <div>
          <Button
            color="primary"
            onClick={
              this.state.update ? this.handleUpdateUser : this.handleCreateUser
            }
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
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(UserForm);
