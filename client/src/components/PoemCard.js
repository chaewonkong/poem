import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const PoemCard = props => {
  return (
    <Card>
      <CardContent>
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
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default PoemCard;
