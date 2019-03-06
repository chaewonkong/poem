import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input } from "antd";
import Button from "@material-ui/core/Button";
import * as actions from "../../actions";
import Typography from "@material-ui/core/Typography";
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const { id, title, content } = this.props.poems;
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

  handleSubmit = () => {
    if (this.props.variant === "create") {
      this.props.postPoem({
        token: this.props.auth.token,
        title: this.state.title,
        content: this.state.content.replace(/\n/g, "\n")
      });
    } else if (this.props.variant === "update") {
      this.props.updatePoem({
        id: this.props.poems.id || undefined,
        token: this.props.auth.token,
        title: this.state.title,
        content: this.state.content.replace(/\n/g, "\n")
      });
    }
  };

  render() {
    const { TextArea } = Input;
    return (
      <div className="container">
        {this.props.showTheme ? <Typography variant="h6">꽃</Typography> : null}
        <form style={{ width: "100%" }}>
          <p># 제목</p>
          <Input
            name="title"
            style={{
              background: "#E7E7E7",
              border: "none",
              outline: "none"
            }}
            onChange={this.handleChange}
          />
          <p># 본문</p>
          <TextArea
            name="content"
            rows={16}
            style={{
              background: "#E7E7E7",
              border: "none",
              outline: "none"
            }}
            onChange={this.handleChange}
          />
        </form>
        <div className="btnCreate">
          <Button
            type="submit"
            onClick={this.handleSubmit}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(PoemForm);
