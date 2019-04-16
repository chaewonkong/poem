import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Input, Tabs } from "antd";
import CustomHeader from "../CustomHeader";
import * as actions from "../../actions";
import { color } from "../../config/_mixin";

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
        <CustomHeader
          title="시 본문 작성"
          handleLeft={this.props.handlePrev}
          handleRight={() =>
            this.props.handleNext({
              type: "detail",
              title: this.state.title,
              content: this.state.content,
              align: this.state.align
            })
          }
        />
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
      </Container>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.variant === "update") {
      const { id, title, content, align } = this.props.poems.poem;
      this.setState({
        id,
        title,
        content,
        align,
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
          {guide_format
            ? guide_format.split("\n").map(line => (
                <p key={line} style={{ fontSize: 20, color: "#ABABAB" }}>
                  {line}
                </p>
              ))
            : null}
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
  background-color: ${color.lightGreyColor} !important;
  border: none;
  outline: none;
`;

const TextArea = styled(Input.TextArea)`
  background-color: ${color.lightGreyColor} !important;
  border: none;
  outline: none;
`;

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(PoemForm);
