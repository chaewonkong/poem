import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PoemMenu from "./PoemMenu";
import IconButton from "@material-ui/core/IconButton";
import uuidv1 from "uuid/v1";
import * as actions from "../../actions";
import "../../css/PoemCard.css";
import ReactionBtn from "./ReactionBtn";

class PoemCard extends Component {
  state = {};

  componentDidMount() {
    const { likes, dislikes, do_like, do_dislike } = this.props;
    this.setState({
      likes,
      dislikes,
      do_like,
      do_dislike
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const { likes, dislikes, do_like, do_dislike } = this.props;
      this.setState({
        likes,
        dislikes,
        do_like,
        do_dislike
      });
    }
  }

  render() {
    const { image, nickname, userId, id, date, title, content } = this.props;
    const { likes, dislikes, do_like, do_dislike } = this.state;
    return (
      <Card
        style={{
          marginBottom: "2vh",
          background: "#E7E7E7",
          boxShadow: "none",
          width: "90%"
        }}
      >
        <Link to="/user_detail">
          <CardHeader
            avatar={<Avatar src={image} alt={nickname} />}
            action={
              <IconButton>
                <PoemMenu id={id} userId={userId} />
              </IconButton>
            }
            title={nickname}
            subheader={date}
          />
        </Link>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" style={{ color: "#707070" }} gutterBottom>
            {title}
          </Typography>
          {content.split("\n").map(line => (
            <Typography
              style={{ color: "#ABABAB" }}
              component="p"
              key={uuidv1()}
            >
              {line ? line : <br />}
            </Typography>
          ))}
        </CardContent>
        <div className="reaction-counter">
          <img
            className="counter-img"
            alt="좋아요"
            src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
          />
          <p className="counter-txt">{likes}</p>
          <img
            className="counter-img"
            alt="달라요"
            src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
          />
          <p className="counter-txt">{dislikes}</p>
        </div>

        <CardActions disableActionSpacing>
          <div className="reaction-container">
            <ReactionBtn
              type="do_like"
              visible={do_like}
              token={this.props.token}
              id={id}
            />
            <ReactionBtn
              type="do_dislike"
              visible={do_dislike}
              token={this.props.token}
              id={id}
            />
          </div>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { token: state.auth.token };
};

export default connect(
  mapStateToProps,
  actions
)(PoemCard);
