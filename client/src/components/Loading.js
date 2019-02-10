import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      <img src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB.svg" />
      <p>하루의 시작은 하루시작과 함께</p>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "15vh",
    alignItems: "center"
  }
};
export default Loading;
