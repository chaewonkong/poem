import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PoemMenu from "./PoemMenu";
import IconButton from "@material-ui/core/IconButton";
import uuidv1 from "uuid/v1";

const PoemCard = props => {
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
        avatar={<Avatar src={props.image} alt={props.nickname} />}
        action={
          <IconButton>
            <PoemMenu id={props.id} userId={props.userId} />
          </IconButton>
        }
        title={props.nickname}
        subheader={props.date}
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" style={{ color: "#707070" }} gutterBottom>
          {props.title}
        </Typography>
        {props.content.split("\n").map(line => (
          <Typography style={{ color: "#ABABAB" }} component="p" key={uuidv1()}>
            {line ? line : <br />}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableActionSpacing>
        <div>
          <img
            alt="like"
            src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
          />
        </div>
      </CardActions>
    </Card>
  );
};

export default PoemCard;
