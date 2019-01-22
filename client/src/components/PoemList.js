import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../css/PoemList.css";
import PoemCard from "./PoemCard";

class PoemList extends Component {
  componentDidMount() {
    this.props.fetchPoems();
  }
  renderPoems() {
    const poems = Array.from(this.props.poems);
    if (poems !== null) {
      return poems.map(poem => {
        return (
          <PoemCard
            title={poem.title}
            content={poem.content}
            key={poem.id}
            writer={poem.writer.nickname}
          />
        );
      });
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(PoemList);
