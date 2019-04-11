import React from "react";
import CustomHeader from "../CustomHeader";

const PoemDetail = props => {
  console.log(props);
  return (
    <div>
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
      <h3>{props.title}</h3>
      {props.content.split("\n").map(line => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
};

export default PoemDetail;
