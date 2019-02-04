import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../../css/PoemList.css";
import { PoemCard } from "../";

class PoemList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPoems();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.poems.length !== this.props.poems.length) {
      this.props.fetchPoems();
    }
  }

  renderPoems() {
    const poems = Array.from(this.props.poems);
    if (poems !== null) {
      return poems.map(poem => {
        return (
          <PoemCard
            image={poem.writer.image}
            title={poem.title}
            content={poem.content}
            key={poem.id}
            nickname={poem.writer.nickname}
            userId={poem.writer.id}
            date={poem.written_date}
            id={poem.id}
            poemDelete={this.props.deletePoem}
          />
        );
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="mainContainer">
        {this.renderPoems()}
        <Link to="/poems/new" className="btn-floating">
          <Fab
            style={{ color: "#ABABAB", boxShadow: "none" }}
            aria-label="Edit"
          >
            <Icon style={{ color: "white" }}>edit_icon</Icon>
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
