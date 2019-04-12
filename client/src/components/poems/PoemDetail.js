import React from "react";
import CustomHeader from "../CustomHeader";
import { Container, Footer, PoemContent } from "../common";

const PoemDetail = props => {
  console.log(props);
  return (
    <Container>
      <CustomHeader
        title="시 세부사항 설정"
        handleLeft={() =>
          props.handlePrev({
            type: "form",
            content: props.content,
            title: props.title
          })
        }
        handleRight={() =>
          props.handlePrev({
            type: "publish",
            content: props.content,
            title: props.title
          })
        }
      />
      <PoemContent>
        <h3>{props.title}</h3>
        {props.content.split("\n").map(line => (
          <p key={line}>{line}</p>
        ))}
      </PoemContent>
      <Footer>
        <img src={alignLeft} />
        <img src={alignCenter} />
        <img src={alignRight} />
      </Footer>
    </Container>
  );
};

const alignCenter =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_C.svg";
const alignLeft =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EA%B8%80%EC%A0%95%EB%A0%AC_L.svg";
const alignRight =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/글정렬_R.svg";

export default PoemDetail;
