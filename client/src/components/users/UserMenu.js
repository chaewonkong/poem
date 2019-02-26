import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer, Avatar } from "antd";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../actions";
import { Dropdown, Button } from "antd";

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

  handleLogoutUser = () => {
    this.props.logoutUser(this.props.auth.token);
  };
  handleDeleteUser = () => {
    const { pk, token } = this.props.auth;
    this.props.deleteUser({ userId: pk, token });
  };

  render() {
    const menu = (
      <div>
        <Button size="5vw" onClick={this.handleLogoutUser}>
          로그아웃
        </Button>
      </div>
    );
    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer}
        >
          <MenuIcon style={{ color: "#A4A4A4" }} />
        </IconButton>

        <Drawer
          title="Basic Drawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {" "}
          <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
            {/* <Button> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={this.props.auth.image} />
              <Typography variant="h6" style={{ color: "#A4A4A4" }}>
                {this.props.auth.nickname}
              </Typography>
            </div>
            {/* </Button> */}
          </Dropdown>
          {/* <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={this.props.auth.image} />
              <Typography variant="h6" style={{ color: "#A4A4A4" }}>
                {this.props.auth.nickname}
              </Typography>
            </div> */}
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <img
              alt="모아보기"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%86%E1%85%A9%E1%84%8B%E1%85%A1%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
            />
            <p>모아보기</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <img
              alt="구독"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%80%E1%85%AE%E1%84%83%E1%85%A9%E1%86%A8+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
            />
            <p>구독</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <img
              alt="담아온 시"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%B7%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B5+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
            />
            <p>담아온 시</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <img
              alt="설정"
              src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
            />
            <p>설정</p>
          </div>
          <p onClick={this.handleLogoutUser}>로그아웃</p>
          <p onClick={this.handleDeleteUser}>회원탈퇴</p>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(UserMenu);
