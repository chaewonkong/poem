import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import styled from "styled-components";
import CustomHeader from "../CustomHeader";
import { Container } from "../common";

const handleSubmit = async props => {
  const { token } = props.auth;
  const { title, content, align } = props;
  const res = await axios.post(
    "https://mighty-chamber-86168.herokuapp.com/poems/",
    { content, title, align },
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
            title: props.title,
            align: props.align
          })
        }
        handleRight={() => handleSubmit(props)}
      />
      <h3>{props.title}</h3>
      <Poem align={props.align}>
        {props.content.split("\n").map(line => (
          <p key={line}>{line}</p>
        ))}
      </Poem>
    </Container>
  );
};

const Poem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: ${props => props.align};
`;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PoemPublish);
