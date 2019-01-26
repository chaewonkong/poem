import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as actions from "../actions";

class PoemMenu extends Component {
  state = {
    anchorEl: null
  };

  handleDelete = () => {
    this.props.deletePoem({
      id: this.props.id,
      token: this.props.auth.token
    });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <MoreVertIcon onClick={this.handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClick}>수정</MenuItem>
          <MenuItem onClick={this.handleDelete}>삭제</MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(PoemMenu);
