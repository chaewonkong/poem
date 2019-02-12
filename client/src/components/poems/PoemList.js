import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import * as actions from "../../actions";
import "../../css/PoemList.css";
import PoemCard from "./PoemCard";
import Loading from "../Loading";

class PoemList extends Component {
  state = {
    btnHover: false,
    isLoading: true
  };

  componentDidMount() {
    this.props.fetchPoems();
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.poems.length !== this.props.poems.length) {
      this.props.fetchPoems();
    }
  }

  onHover() {
    this.setState({ btnHover: true });
  }
  onHoverDown() {
    this.setState({ btnHover: false });
  }

  renderCreateBtn() {
    if (this.state.btnHover) {
      return (
        <img
          alt="시 쓰기"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8A%E1%85%B3%E1%84%80%E1%85%B5+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%8B%E1%85%A9%E1%84%87%E1%85%A5%E1%84%89%E1%85%B5.svg"
        />
      );
    } else {
      return (
        <img
          alt="시 쓰기"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8A%E1%85%B3%E1%84%80%E1%85%B5+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%8B%E1%85%A9%E1%84%87%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%AB.svg"
        />
      );
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
      <Fragment>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="mainContainer">
            <p
              style={{
                width: "90%",
                float: "left",
                color: "#ABABAB",
                fontSize: 20
              }}
            >
              # 20xx년 xx월 xx일, 오늘
            </p>
            {this.renderPoems()}
            <Link to="/poems/new" className="btn-floating">
              <div
                onMouseOver={this.onHover.bind(this)}
                onMouseLeave={this.onHoverDown.bind(this)}
              >
                {this.renderCreateBtn()}
              </div>
            </Link>
          </div>
        )}
      </Fragment>
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
