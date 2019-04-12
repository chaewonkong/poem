import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import CustomHeader from "../CustomHeader";
import { Container, PoemContent } from "../common";

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
    <Container>
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
      <PoemContent>
        <h3>{props.title}</h3>
        {props.content.split("\n").map(line => (
          <p key={line}>{line}</p>
        ))}
      </PoemContent>
    </Container>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PoemPublish);
