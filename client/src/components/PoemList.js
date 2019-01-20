import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import styles from "../css/PoemList.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

class PoemList extends Component {
  renderPoems() {
    const poems = this.props.poems;
    if (this.props.poems) {
      switch (poems) {
        case null:
          return;
        case false:
          return <li>undefined</li>;
        default:
          return poems.map(poem => {
            return (
              <Card>
                <CardContent>
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    {poem.title}
                  </Typography>
                  <Typography component="p">
                    {poem.content.map(line => (
                      <p key={line}>{line}</p>
                    ))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            );
          });
      }
    }
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        {this.renderPoems()}
        <Link
          to="/poems/new"
          className="btn-floating btn-large waves-effect waves-light red right"
        >
          <Fab color="secondary" aria-label="Edit">
            <Icon>edit_icon</Icon>
          </Fab>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ poems }) => {
  return poems;
};

export default connect(
  mapStateToProps,
  actions
)(PoemList);
