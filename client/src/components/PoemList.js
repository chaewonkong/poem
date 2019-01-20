import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import styles from "../css/PoemList.css";
import PoemCard from "./PoemCard";
import { Z_FIXED } from "zlib";

class PoemList extends Component {
  renderPoems() {
    const poems = this.props.poems;
    if (this.props.poems) {
      switch (poems) {
        case null:
          return;
        case false:
          return <li>undefined</li>;
        default:
          return poems.map(poem => {
            return <PoemCard title={poem.title} content={poem.content} />;
          });
      }
    }
  }
  render() {
    return (
      <div className="mainContainer">
        {this.renderPoems()}
        <Link to="/poems/new" className="btn-floating">
          <Fab color="secondary" aria-label="Edit">
            <Icon>edit_icon</Icon>
          </Fab>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ poems }) => {
  return poems;
};

export default connect(
  mapStateToProps,
  actions
)(PoemList);
