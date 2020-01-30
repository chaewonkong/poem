import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Avatar } from "antd";
import Typography from "@material-ui/core/Typography";
import { DefaultHeader } from "../../components/common";
import PoemCard from "../../components/poems/List/PoemCard";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      userId: props.match.params.userId,
      poems_displayed_count: null,
      poems_all_count: null,
      subscribed_count: null,
      likes_count: null,
      keeped_count: null,
      nickname: null,
      description: null,
      image: null
    };
  }

  componentDidMount() {
    const { userId } = this.state;
    axios
      .get(`https://mighty-chamber-86168.herokuapp.com/users/${userId}/`)
      .then(res => {
        this.setState({ ...this.state, ...res.data });
      });

    axios
      .get(`https://mighty-chamber-86168.herokuapp.com/users/${userId}/poems/`)
      .then(res => {
        this.setState({ poems: res.data.results });
      });
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
      keeped_count,
      image,
      nickname,
      description
    } = this.state;
    return (
      <div>
        <DefaultHeader />
        <DetailContainer>
          <AvatarContainer>
            <Avatar src={image} />
            <Typography variant="h6" style={{ color: "#A4A4A4" }}>
              {nickname}
            </Typography>
          </AvatarContainer>
          <p>{description}</p>
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
  margin: 0 auto;
  padding-top: 12vh;
  padding-bottom: 3vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e7e7e7;
`;

const PoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3vh;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  h6 {
    padding-left: 1vw;
  }
`;

export default UserDetail;
