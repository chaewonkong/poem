import React from "react";
import Typography from "@material-ui/core/Typography";

const PoemSubject = props => {
  return (
    <div>
      <Typography align="left" color="textPrimary" variant="h5">
        주제: {props.title}
      </Typography>
    </div>
  );
};

export default PoemSubject;
