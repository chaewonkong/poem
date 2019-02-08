import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
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
    return (
      <div className="mainContainer">
        {this.renderPoems()}
        <Link to="/poems/new" className="btn-floating">
          <img src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_css.svg" />
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
