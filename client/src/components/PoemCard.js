import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const PoemCard = props => {
  return (
    <Card style={{ marginBottom: "2vh" }}>
      <CardHeader
        avatar={<Avatar aria-label="Recipe">R</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
        <Typography component="p">
          {props.content.map(line => (
            <p key={line}>{line}</p>
          ))}
        </Typography>
      </CardContent>
      <div>
        <Button size="small" variant="flat">
          좋아요
        </Button>
      </div>
    </Card>
  );
};

export default PoemCard;
