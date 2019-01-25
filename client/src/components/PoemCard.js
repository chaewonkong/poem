import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import uuidv1 from "uuid/v1";

const PoemCard = props => {
  return (
    <Card style={{ marginBottom: "2vh" }}>
      <CardHeader
        avatar={<Avatar src={props.image} alt={props.nickname} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.writer}
        subheader="2019년 1월 3일"
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {props.title}
        </Typography>

        {props.content.split("\n").map(line => (
          <Typography component="p" key={uuidv1()}>
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

export default PoemCard;
