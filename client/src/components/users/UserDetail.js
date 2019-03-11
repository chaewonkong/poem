import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Avatar } from "antd";
import Typography from "@material-ui/core/Typography";
import DefaultHeader from "../DefaultHeader";
import PoemCard from "../poems/PoemCard";

class UserDetail extends Component {
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
      <div>
        <DefaultHeader />
        <DetailContainer>
          <div style={{ display: "flex" }}>
            <Avatar src={this.props.auth.image} />
            <Typography variant="h6" style={{ color: "#A4A4A4" }}>
              {this.props.auth.nickname}
            </Typography>
          </div>
          <p>{this.props.auth.description}</p>
          <p>공개 / 씀</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>좋아요</p>
            <p>구독</p>
            <p>담아감</p>
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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserDetail);
