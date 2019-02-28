import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PoemMenu from "./PoemMenu";
import IconButton from "@material-ui/core/IconButton";
import uuidv1 from "uuid/v1";
import "../../css/PoemCard.css";

class PoemCard extends Component {
  render() {
    const {
      image,
      nickname,
      id,
      userId,
      date,
      title,
      content,
      likes,
      dislikes,
      do_like,
      do_dislike
    } = this.props;
    return (
      <Card
        style={{
          marginBottom: "2vh",
          background: "#E7E7E7",
          boxShadow: "none",
          width: "90%"
        }}
      >
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
            <div className="reaction-box">
              <div className={do_like ? "reaction-visible" : "reaction-hidden"}>
                <img
                  alt="like"
                  src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
                />
                좋아요
              </div>
            </div>
            <div className="reaction-box">
              <div
                className={do_dislike ? "reaction-visible" : "reaction-hidden"}
              >
                <img
                  alt="different"
                  src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
                />
                달라요
              </div>
            </div>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default PoemCard;
