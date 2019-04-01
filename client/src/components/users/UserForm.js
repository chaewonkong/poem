import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import UploadProfile from "./UploadProfile";
import * as actions from "../../actions";

class UserForm extends Component {
  state = {
    identifier: "",
    nickname: "",
    password: "",
    passwordConf: "",
    image: "",
    isUpdate: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      const { identifier, nickname, image, pk } = this.props.auth;
      this.setState({
        identifier,
        nickname,
        image,
        userId: pk,
        isUpdate: true
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

  handleCreateUser = async () => {
    const { identifier, nickname, password, passwordConf, image } = this.state;
    if (password === passwordConf) {
      const data = new FormData();
      data.append("identifier", identifier);
      data.append("nickname", nickname);
      data.append("password", password.toLowerCase());
      if (image) data.append("image", image);
      const res = await axios.post(
        "https://mighty-chamber-86168.herokuapp.com/users/",
        data
      );
      if (res.status === 201) {
        localStorage.setItem("TOKEN", res.data.token);
        window.location.href = "/";
      }
    } else alert("비밀번호를 확인하세요");
  };

  handleUpdateUser = async () => {
    const { token } = this.props.auth;
    const { userId, image, nickname, password, identifier } = this.state;
    const data = new FormData();
    data.append("identifier", identifier);
    data.append("nickname", nickname);
    data.append("password", password);
    if (image) data.append("image", image);
    const res = await axios.put(
      `https://mighty-chamber-86168.herokuapp.com/users/${userId}/`,
      data,
      {
        headers: { Authorization: token }
      }
    );
    if (res.status === 200) {
      window.location.href = "/";
    }
  };

  onImageChange = e => {
    this.setState({ image: e.target });
  };

  beforeUpload = file => {
    this.setState({
      image: file,
      imageUrl: URL.createObjectURL(file)
    });
  };

  handleImageUpload = () => {
    console.log(this.state);
  };
  render() {
    const { isUpdate } = this.state;

    return (
      <Container>
        <div>
          <InputContainer>
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
              label="필명"
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
          </InputContainer>
          <ImageContainer>
            <UploadProfile
              onChange={this.onImageChange}
              beforeUpload={this.beforeUpload}
              handleUpload={this.handleImageUpload}
              imageUrl={this.state.imageUrl}
            />
            {this.state.image ? <p>{this.state.image.name}</p> : null}
          </ImageContainer>
        </div>
        <div>
          <Button
            color="primary"
            onClick={isUpdate ? this.handleUpdateUser : this.handleCreateUser}
            variant="outlined"
          >
            {isUpdate ? "업데이트" : "회원가입"}
          </Button>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="secondary" variant="outlined">
              취소
            </Button>
          </Link>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3vh;
`;

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(UserForm);
