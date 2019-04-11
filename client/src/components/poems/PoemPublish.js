import React from "react";
import CustomHeader from "../CustomHeader";

const PoemPublish = props => {
  console.log(props);
  return (
    <div>
      <CustomHeader
        title="완성된 시"
        handleLeft={() =>
          props.handlePrev({
            type: "detail",
            content: props.content,
            title: props.title
          })
        }
      />
      <h3>Publish</h3>
    </div>
  );
};

export default PoemPublish;
