import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Drawer, Avatar, Dropdown } from "antd";
import { IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { color, fontFamily } from "../../../config/_mixin";

class UserMenu extends Component {
  state = { visible: false, placement: "left" };

  toggleDrawer = () => {
    this.setState({
      visible: this.state.visible ? false : true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  handleUpdateUser = () => (window.location.href = "/users/new");

  handleLogoutUser = async () => {
    const token = this.props.auth.token;
    const res = await axios.post(
      "https://mighty-chamber-86168.herokuapp.com/auth/logout/",
      {},
      {
        headers: { Authorization: token }
      }
    );
    if (res.status === 200) {
      localStorage.setItem("TOKEN", "");
      this.props.logoutUser();
    }
  };
  handleDeleteUser = async () => {
    const { pk, token } = this.props.auth;
    const userId = pk;
    if (window.confirm("삭제하시겠습니까?")) {
      const res = await axios.delete(
        `https://mighty-chamber-86168.herokuapp.com/users/${userId}/`,
        {
          headers: { Authorization: token }
        }
      );
      if (res.status === 204) {
        localStorage.setItem("TOKEN", "");
        this.props.fetchUser({});
      }
    }
  };

  render() {
    const menu = (
      <div>
        <LogoutButton onClick={this.handleLogoutUser}>로그아웃</LogoutButton>
        <LogoutButton onClick={this.handleUpdateUser}>정보수정</LogoutButton>
        <LogoutButton onClick={this.handleDeleteUser}>회원탈퇴</LogoutButton>
      </div>
    );
    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer}
        >
          <Menu />
        </IconButton>

        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
            <UserContainer>
              <Avatar src={this.props.auth.image} />
              <NicknameText variant="h6">
                {this.props.auth.nickname}
              </NicknameText>
            </UserContainer>
          </Dropdown>
          <br />
          <ListItem>
            <img
              alt="모아보기"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EB%AA%A8%EC%95%84%EB%B3%B4%EA%B8%B0+%EC%95%84%EC%9D%B4%EC%BD%98.svg"
            />
            <p>모아보기</p>
          </ListItem>
          <ListItem>
            <img
              alt="구독"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%80%E1%85%AE%E1%84%83%E1%85%A9%E1%86%A8+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
            />
            <p>구독</p>
          </ListItem>
          <ListItem>
            <img
              alt="담아온 시"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EB%8B%B4%EC%95%84%EA%B0%80%EA%B8%B0%EC%95%84%EC%9D%B4%EC%BD%98.svg"
            />
            <p>담아온 시</p>
          </ListItem>
          <ListItem>
            <img
              alt="설정"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EC%84%A4%EC%A0%95+%EC%95%84%EC%9D%B4%EC%BD%98.svg"
            />
            <p>설정</p>
          </ListItem>
          <p style={{ cursor: "pointer" }} onClick={this.handleDeleteUser}>
            회원탈퇴
          </p>
        </Drawer>
      </div>
    );
  }
}

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = styled(MenuIcon)`
  color: ${color.defaultColor};
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  background: #fff;
  border-radius: 0.1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: ${fontFamily.default};
  border: 1px solid ${color.defaultColor};
  color: ${color.defaultColor};
`;

const NicknameText = styled(Typography)`
  color: ${color.defaultColor} !important;
`;

export default UserMenu;
