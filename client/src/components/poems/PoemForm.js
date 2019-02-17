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
            placeholder="서시"
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
            rows="10"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder={`죽는 날까지 하늘을 우러러\n한점 부끄럼이 없기를\n잎새에 이는 바람에도\n나는 괴로워했다\n별을 노래하는 마음으로\n모든 죽어가는 것을 사랑해야지\n그리고 나한테 주어진 길을\n걸어가야겠다.\n\n오늘 밤에도 별이 바람에 스치운다.`}
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
