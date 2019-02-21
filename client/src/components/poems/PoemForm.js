import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as actions from "../../actions";
import Typography from "@material-ui/core/Typography";
import styles from "../../css/PoemForm.module.css";

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
    return (
      <div className={styles.container}>
        {this.props.showTheme ? <Typography variant="h6">꽃</Typography> : null}
        <form className={styles.formStyle}>
          <TextField
            id="title"
            name="title"
            fullWidth
            label="시 제목"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="꽃"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <TextField
            id="content"
            name="content"
            fullWidth
            label="시 내용"
            multiline
            margin="normal"
            variant="outlined"
            rows="12"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder={`꽃을 받았을 때 기분이 좋은 건\n단순히 꽃이 예뻐서가 아니다.\n약속 시간보다 일찍나와\n꽃집에 들렀을 너의 소중한 시간,\n나를 생각하며 신중하게 골랐을 마음,\n활짝 웃을 내 표정을 기대하며 걸었을 발걸음,\n너에게 난 참 소중한 사람이라고\n네가 말하지 않아도\n꽃이 전부 말해주니까\n\n -김요비`}
          />
        </form>
        <div className={styles.btnCreate}>
          <Button
            type="submit"
            onClick={this.handleSubmit}
            color="primary"
            variant="outlined"
          >
            작성완료
          </Button>
          <Link to="/" className={styles.linkStyle}>
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
