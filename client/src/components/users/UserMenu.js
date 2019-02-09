import React, { Component } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

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

  render() {
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
          <Typography variant="h6" style={{ color: "#A4A4A4" }}>
            {this.props.nickname}
          </Typography>
          <br />
          <p>모아보기</p>
          <p>구독</p>
          <p>담아온 시</p>
          <p>설정</p>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(UserMenu);
