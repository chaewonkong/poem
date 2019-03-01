import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ReactionBtn extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      visible: this.props.visible
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        visible: this.props.visible
      });
    }
  }

  handleReactionToggle() {
    // if (this.props.type === "do_like") {
    //   if (this.props.token) {
    //     const { token, id } = this.props;
    //     this.props.likePoem({ token, id });
    //   }
    // } else {
    //   if (this.props.token) {
    //     const { token, id } = this.props;
    //     this.props.dislikePoem({ token, id });
    //   }
    // }
    console.log(this.props);
  }

  renderImgType() {
    if (this.props.type === "do_like") {
      return (
        <img
          alt="different"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
        />
      );
    } else {
      return (
        <img
          alt="different"
          src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
        />
      );
    }
  }

  render() {
    console.log(this.props);
    const { visible, type } = this.props;
    return (
      <div className="reaction-box">
        <div className={visible ? "reaction-visible" : "reaction-hidden"}>
          {this.renderImgType()}
          <button className="reaction-btn" onClick={this.handleReactionToggle}>
            {type === "do_like" ? "좋아요" : "달라요"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  actions
)(ReactionBtn);
