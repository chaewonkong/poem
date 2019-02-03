import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import PoemMenu from "./PoemMenu";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import uuidv1 from "uuid/v1";

const PoemCard = props => {
  return (
    <Card
      style={{
        marginBottom: "2vh",
        background: "#E7E7E7",
        boxShadow: "none",
        width: "73.6%"
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
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { PoemCard };
