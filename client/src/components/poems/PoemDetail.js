import React, { Component } from "react";
import CustomHeader from "../CustomHeader";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container } from "../common";
import { color, media } from "../../config/_mixin";

class PoemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      align: props.align,
      id: props.id
    };
  }

  handleAlign(align) {
    this.setState({ align });
  }

  handleSubmit = async ({ type, content, title, align }) => {
    const { token } = this.props.auth;
    if (this.props.variant === "update") {
      const { id } = this.state;
      const res = await axios.put(
        `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
        { content, title, align },
        { headers: { Authorization: token } }
      );
      if (res.status === 200) {
        //
        this.props.handlePrev({
          type,
          content,
          title,
          align
        });
      }
    } else {
      const res = await axios.post(
        "https://mighty-chamber-86168.herokuapp.com/poems/",
        { content, title, align },
        { headers: { Authorization: token } }
      );
      if (res.status === 201) {
        this.props.handlePrev({
          type,
          content,
          title,
          align
        });
      }
    }
  };

  render() {
    const { title, content } = this.props;
    const { align } = this.state;
    return (
      <Container>
        <CustomHeader
          title="시 세부사항 설정"
          handleLeft={() =>
            this.props.handlePrev({
              type: "form",
              content,
              title,
              align
            })
          }
          handleRight={() =>
            this.handleSubmit({
              type: "publish",
              content,
              title,
              align
            })
          }
        />
        <Poem>
          <h3>{title}</h3>
          <PoemContent align={this.state.align}>
            {content.split("\n").map(line => (
              <p key={Math.floor(1000000 * Math.random())}>{line}</p>
            ))}
          </PoemContent>
        </Poem>
        <Footer>
          <AlignIcon
            alt="left-align"
            src={alignLeft}
            onClick={() => this.handleAlign("left")}
          />
          <AlignIcon
            alt="center-align"
            src={alignCenter}
            onClick={() => this.handleAlign("center")}
          />
          <AlignIcon
            alt="right-align"
            src={alignRight}
            onClick={() => this.handleAlign("right")}
          />
        </Footer>
      </Container>
    );
  }
}

const Poem = styled.div`
  margin-top: 5vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PoemContent = styled.div`
  margin-top: 5vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: ${props => props.align};
`;

const Footer = styled.div`
  ${media.desktop`width: 30vw`}
  ${media.mobile`width: 100vw`}
  background: ${color.backgroundColor};
  position: fixed;
  bottom: 0;
  cursor: pointer;
`;

const AlignIcon = styled.img`
  cursor: pointer;
`;

const alignCenter =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_C.svg";
const alignLeft =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EA%B8%80%EC%A0%95%EB%A0%AC_L.svg";
const alignRight =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_R.svg";

const mapStateToProps = state => state;
export default connect(mapStateToProps)(PoemDetail);
