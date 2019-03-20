import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Icon } from "antd";
import * as actions from "../../actions";
import "../../css/PoemList.css";
import DefaultHeader from "../DefaultHeader";
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

  renderPoems() {
    const poems = this.props.poems;
    if (poems.results) {
      return Array.from(poems.results).map(poem => {
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

  fetchMoreData(token, next) {
    if (token) this.props.fetchPoems(token, next);
    else this.props.fetchPoems(null, next);
  }

  render() {
    // console.log(this.props);
    const { token } = this.props.auth;
    const { count, next } = this.props.poems || { count: 0, next: () => {} };
    return (
      <Fragment>
        <DefaultHeader />

        <InfiniteList
          dataLength={count}
          hasMore={next ? true : false}
          next={() => this.fetchMoreData(token, next)}
          loader={<Icon type="loading" />}
          endMessage={<h3>총 {count}개 결과</h3>}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <DateText># 20xx년 xx월 xx일, 오늘</DateText>
          {this.renderPoems()}
          <Link to="/poems/new" className="btn-floating">
            <div>
              <CreateButton hover={this.state.btnHover} />
            </div>
          </Link>
        </InfiniteList>
      </Fragment>
    );
  }
}

const CreateButton = styled.div`
  background: url("https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8A%E1%85%B3%E1%84%80%E1%85%B5%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%89%E1%85%A2%E1%86%A8.svg")
    no-repeat;
  transition: 0.3s ease-in-out;
  z-index: 10;
  width: 50px;
  height: 50px;
  :hover {
    transition: 0.3s ease-in-out;
    background: url("https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8A%E1%85%B3%E1%84%80%E1%85%B5+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB+%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC_%E1%84%8B%E1%85%A9%E1%84%87%E1%85%A5%E1%84%89%E1%85%B5.svg");
  }
`;

const InfiniteList = styled(InfiniteScroll)`
  display: flex;
  flexdirection: column;
  alignitems: center;
`;

const DateText = styled.p`
  margin-top: 10vh;
  width: 90%;
  float: left;
  color: ABABAB;
  font-size: 20px;
`;

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(PoemList);
