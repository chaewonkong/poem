import React, { Component } from "react";
import CustomHeader from "../CustomHeader";
import styled from "styled-components";
import { Container, Footer } from "../common";

export default class PoemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content,
      align: props.align
    };
  }

  handleAlign(align) {
    this.setState({ align });
  }

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
            this.props.handlePrev({
              type: "publish",
              content,
              title,
              align
            })
          }
        />
        <h3>{title}</h3>
        <Poem align={this.state.align}>
          {content.split("\n").map(line => (
            <p key={line}>{line}</p>
          ))}
        </Poem>
        <Footer>
          <img src={alignLeft} onClick={() => this.handleAlign("left")} />
          <img src={alignCenter} onClick={() => this.handleAlign("center")} />
          <img src={alignRight} onClick={() => this.handleAlign("right")} />
        </Footer>
      </Container>
    );
  }
}

const Poem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: ${props => props.align};
`;

const alignCenter =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_C.svg";
const alignLeft =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EA%B8%80%EC%A0%95%EB%A0%AC_L.svg";
const alignRight =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_R.svg";
