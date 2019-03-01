import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
    if (this.props.auth.token) this.props.fetchPoems(this.props.auth.token);
    else this.props.fetchPoems();
    this.setState({ isLoading: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.poems.length !== this.props.poems.length ||
      prevProps.auth !== this.props.auth
    ) {
      if (this.props.auth.token) {
        this.props.fetchPoems(this.props.auth.token);
      } else this.props.fetchPoems();
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
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8A%E1%85%B3%E1%84%80%E1%85%B5%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8.svg"
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
            key={poem.id}
            image={poem.writer.image}
            nickname={poem.writer.nickname}
            userId={poem.writer.id}
            id={poem.id}
            date={poem.written_date}
            title={poem.title}
            content={poem.content}
            likes={poem.likes}
            dislikes={poem.dislikes}
            do_like={poem.do_like}
            do_dislike={poem.do_dislike}
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
                onPointerEnter={this.onHover.bind(this)}
                onPointerOut={this.onHoverDown.bind(this)}
                onTouchStart={this.onHover.bind(this)}
                onTouchEnd={this.onHoverDown.bind(this)}
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
