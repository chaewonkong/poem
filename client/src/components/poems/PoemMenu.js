import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";
import { Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import * as actions from "../../actions";

class PoemMenu extends Component {
  state = {
    anchorEl: null
  };

  handleDelete = async () => {
    const id = this.props.id;
    const token = this.props.auth.token;
    const res = await axios.delete(
      `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
      {
        headers: { Authorization: token }
      }
    );
    if (res.status === 200 || 204) {
      // poems.results
      const poems = this.props.poems.results;
      _.remove(poems, poem => poem.id === id);
      this.props.fetchPoems({ ...this.props.poems, results: poems });
    }
  };

  handleUpdate = async () => {
    const { id } = this.props;
    const poems = this.props.poems;
    const res = await axios.get(
      `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`
    );
    if (res.status) {
      this.props.getPoem({ ...poems, poem: res.data });
    }
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
            <Link to={`/poems/${this.props.id}/update`}>
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
