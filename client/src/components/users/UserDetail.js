import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { Avatar } from "antd";
import Typography from "@material-ui/core/Typography";
import DefaultHeader from "../DefaultHeader";
import PoemCard from "../poems/PoemCard";

class UserDetail extends Component {
  state = {
    poems: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.pk !== this.props.user.pk) {
      const userId = this.props.user.pk;
      axios
        .get(
          `https://mighty-chamber-86168.herokuapp.com/users/${userId}/poems/`
        )
        .then(res => this.setState({ poems: Array.from(res.data.results) }));
    }
  }

  renderPoems() {
    const poems = this.state.poems;
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
    const {
      poems_displayed_count,
      poems_all_count,
      subscribed_count,
      likes_count,
      keeped_count
    } = this.props.user;
    return (
      <div>
        <DefaultHeader />
        <DetailContainer>
          <AvatarContainer>
            <Avatar src={this.props.user.image} />
            <Typography variant="h6" style={{ color: "#A4A4A4" }}>
              {this.props.user.nickname}
            </Typography>
          </AvatarContainer>
          <p>{this.props.user.description}</p>
          <p>
            {poems_displayed_count} 공개 / {poems_all_count} 씀
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{likes_count} 좋아요</p>
            <p>{subscribed_count} 구독</p>
            <p>{keeped_count} 담아감</p>
          </div>
        </DetailContainer>
        <PoemContainer>{this.renderPoems()}</PoemContainer>
      </div>
    );
  }
}

const DetailContainer = styled.div`
  margin: 5vw 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e7e7e7;
`;

const PoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  h6 {
    padding-left: 1vw;
  }
`;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserDetail);
