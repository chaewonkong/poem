import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as actions from "../../actions";

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

  handleUpdate = () => {
    this.props.fetchPoem({ id: this.props.id, token: this.props.auth.token });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderMenu = () => {
    if (this.props.userId === this.props.auth.pk) {
      return (
        <div>
          <MoreVertIcon onClick={this.handleClick} />
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <Link to="/poems/update">
              <MenuItem onClick={this.handleUpdate}>수정</MenuItem>
            </Link>
            <MenuItem onClick={this.handleDelete}>삭제</MenuItem>
          </Menu>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(PoemMenu);
