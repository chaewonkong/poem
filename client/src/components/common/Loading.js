import React from "react";
import styled from "styled-components";
import { DefaultHeader } from "./";

const Loading = () => {
  return (
    <Container>
      <DefaultHeader />
      <Image
        alt="logo"
        src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB.svg"
      />
      <Text>하루 시작은 하루시작과 함께</Text>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 10vh;
`;

const Text = styled.p`
  margin-top: 8vh;
  font-size: 1.2rem;
`;

export default Loading;
