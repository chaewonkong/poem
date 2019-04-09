import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { Input, Tabs } from "antd";
import Button from "@material-ui/core/Button";
import CustomHeader from "../CustomHeader";
import * as actions from "../../actions";
import "../../css/PoemForm.css";

class PoemForm extends Component {
  state = {
    id: "",
    user: "",
    title: "",
    content: ""
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      user: this.props.user,
      title: this.props.title,
      content: this.props.content
    });
  }

  renderForm() {
    return (
      <Container>
        <CustomHeader />
        <Form>
          <p># 제목</p>
          <StyledInput
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <p># 본문</p>
          <TextArea
            name="content"
            rows={16}
            onChange={this.handleChange}
            value={this.state.content}
          />
        </Form>
        <ButtonContainer>
          <Button
            type="submit"
            onClick={this.handleSubmit}
            // onClick={() => this.props.handleClick("detail")}
            color="primary"
            variant="outlined"
          >
            작성완료
          </Button>
          <Link to="/">
            <Button color="secondary" variant="outlined">
              작성취소
            </Button>
          </Link>
        </ButtonContainer>
      </Container>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.variant === "update") {
      console.log(this.props);
      const { id, title, content } = this.props.poems.poem;
      this.setState({
        id,
        title,
        content,
        token: this.props.auth.token
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      user: e.target.user || "chaewonkong"
    });
  };

  handleSubmit = async () => {
    const token = this.props.auth.token,
      title = this.state.title,
      content = this.state.content.replace(/\n/g, "\n");
    if (this.props.variant === "create") {
      const res = await axios.post(
        "https://mighty-chamber-86168.herokuapp.com/poems/",
        {
          title,
          content
        },
        {
          headers: { Authorization: token }
        }
      );
      if (res.status === 200 || res.status === 201) {
        // window.location.href = "/";
        this.props.handleClick("detail");
      }
    } else if (this.props.variant === "update") {
      const id = this.props.poems.poem.id;
      const res = await axios.put(
        `https://mighty-chamber-86168.herokuapp.com/poems/${id}/`,
        { title, content },
        {
          headers: { Authorization: token }
        }
      );
      if (res.status === 200 || res.status === 201) {
        // window.location.href = "/";
        this.props.handleClick("detail");
      } else console.log(res);
    }
  };

  render() {
    const { subject, guide_format } = this.props.today;
    return (
      <Tabs
        defaultActiveKey="1"
        onChange={() => {}}
        tabBarStyle={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "'Jeju Myeongjo', serif",
          color: "#707070"
        }}
      >
        <TabPane tab="길라잡이 모드" key="1">
          <h3>{subject}</h3>
          <p style={{ fontSize: 20, color: "#ABABAB" }}>{guide_format}</p>
          {this.renderForm()}
        </TabPane>
        <TabPane tab="자유창작 모드" key="2" className="tabStyle">
          <h3>{subject}</h3>
          {this.renderForm()}
        </TabPane>
      </Tabs>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  margin: 0;
`;

const Form = styled.form`
  width: 100%;
`;

const TabPane = styled(Tabs.TabPane)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  background-color: ${props => props.theme.lightGreyColor} !important;
  border: none;
  outline: none;
`;

const TextArea = styled(Input.TextArea)`
  background-color: ${props => props.theme.lightGreyColor} !important;
  border: none;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(PoemForm);
