import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import CustomHeader from "../CustomHeader";
import { Container } from "../common";

const handleSubmit = () => {
  window.location.href = "/";
};

const PoemPublish = props => {
  return (
    <Container>
      <CustomHeader
        title="완성된 시"
        rightIcon={<RightIcon />}
        handleLeft={() =>
          props.handlePrev({
            type: "detail",
            content: props.content,
            title: props.title,
            align: props.align
          })
        }
        handleRight={() => handleSubmit(props)}
      />
      <Poem>
        <h3>{props.title}</h3>
        <PoemContent align={props.align}>
          {props.content.split("\n").map(line => (
            <p key={Math.floor(1000000 * Math.random())}>{line}</p>
          ))}
        </PoemContent>
      </Poem>
    </Container>
  );
};

const RightIcon = () => <img alt="right-triple-dots" src={rightIconImage} />;

const rightIconImage =
  "https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%B7+%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB_%E1%84%89%E1%85%A6%E1%84%85%E1%85%A9.svg";

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

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PoemPublish);
