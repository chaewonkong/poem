import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import UploadProfile from "./UploadProfile";
import { color } from "../../config/_mixin";
import * as actions from "../../actions";

class UserForm extends Component {
  state = {
    identifier: "",
    nickname: "",
    password: "",
    passwordConf: "",
    image: "",
    isUpdate: false,
    idError: "",
    nickError: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      const { identifier, nickname, pk } = this.props.auth;
      this.setState({
        identifier,
        nickname,
        userId: pk,
        isUpdate: true
      });
    }
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

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
      data.append("password", password);
      if (image) data.append("image", image);
      axios
        .post("https://mighty-chamber-86168.herokuapp.com/users/", data)
        .then(response => {
          if (response.status === 201) {
            localStorage.setItem("TOKEN", response.data.token);
            window.location.href = "/";
          }
        })
        .catch(error => {
          const { data } = error.response;
          if (data.identifier)
            this.setState({ idError: data.identifier.join("\n") });
          if (data.nickname)
            this.setState({ nickError: data.nickname.join("\n") });
        });
    }
  };

  handleUpdateUser = async () => {
    const { token } = this.props.auth;
    const { userId, image, nickname, identifier, password } = this.state;
    const data = new FormData();
    if (identifier.length) data.append("identifier", identifier);
    if (nickname.length) data.append("nickname", nickname);
    if (password.length) data.append("password", password);
    if (image.length) data.append("image", image);
    axios
      .put(
        `https://mighty-chamber-86168.herokuapp.com/users/${userId}/`,
        data,
        {
          headers: { Authorization: token }
        }
      )
      .then(response => {
        if (response.status === 200) window.location.href = "/";
      })
      .catch(error => {
        const { data } = error.response;
        if (data.identifier)
          this.setState({ idError: data.identifier.join("\n") });
        if (data.nickname)
          this.setState({ nickError: data.nickname.join("\n") });
      });
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
    const { isUpdate, idError, nickError } = this.state;

    return (
      <Container>
        <div>
          <InputContainer>
            <TextField
              name="identifier"
              required={isUpdate ? false : true}
              label="id"
              placeholder="k0000"
              onChange={this.handleChange}
              value={this.state.identifier}
            />
            {idError ? <Error>{idError}</Error> : null}
            <TextField
              name="nickname"
              required={isUpdate ? false : true}
              label="필명"
              placeholder="숭어다랑어"
              onChange={this.handleChange}
              value={this.state.nickname}
            />
            {nickError ? <Error>{nickError}</Error> : null}
            <TextField
              name="password"
              pattern="[0-9a-z]"
              required={isUpdate ? false : true}
              type="password"
              label="비밀번호"
              placeholder="알파벳 소문자/숫자"
              onChange={this.handleChange}
            />
            <TextField
              name="passwordConf"
              required={isUpdate ? false : true}
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
  margin-top: 10vh;
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

const Error = styled.p`
  color: ${color.dangerColor};
`;

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(UserForm);
