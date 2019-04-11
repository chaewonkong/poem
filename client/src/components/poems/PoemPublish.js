import React from "react";
import axios from "axios";
import CustomHeader from "../CustomHeader";
import { connect } from "react-redux";

const handleSubmit = async props => {
  const { token } = props.auth;
  const { title, content } = props;
  const res = await axios.post(
    "https://mighty-chamber-86168.herokuapp.com/poems/",
    { content, title },
    { headers: { Authorization: token } }
  );
  if (res.status == 201) {
    window.location.href = "/";
  }
};

const PoemPublish = props => {
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
        handleRight={() => handleSubmit(props)}
      />
      <h3>Publish</h3>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PoemPublish);
