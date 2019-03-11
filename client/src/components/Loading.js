import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <img
        alt="logo"
        src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB.svg"
      />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "column";
  margin-top: 15vh;
  align-items: center;
`;

export default Loading;
