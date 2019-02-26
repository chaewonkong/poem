import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      {/* <img
        alt="logo"
        src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A6%E1%86%AB.svg"
      />
      <img
        alt="loading"
        src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EB%A1%9C%EB%94%A9-%EC%A0%90%EB%A7%8C_%EC%88%98%EC%A0%95.gif"
      /> */}
      <img
        alt="loading"
        src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%EA%B8%B4+%EB%A1%9C%EB%94%A9gif_.gif"
      />
    </div>
  );
};
const styles = {
  container: {
    width: "100%",
    background: "rgb(236, 236, 236)",
    display: "flex",
    flexDirection: "column",
    marginTop: "15vh",
    alignItems: "center"
  }
};
export default Loading;
