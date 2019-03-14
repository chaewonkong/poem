import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
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

  fetchSelectedUser = userId => {
    this.props.fetchSelectedUser(userId);
  };

  render() {
    const { image, nickname, userId, id, date, title, content } = this.props;
    const { likes, dislikes, do_like, do_dislike } = this.state;
    return (
      <StyledCard>
        <Link to="/user_detail" onClick={() => this.fetchSelectedUser(userId)}>
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
        <ReactionCounter>
          <CounterImage
            alt="좋아요"
            src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%8C%E1%85%A9%E1%87%82%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
          />
          <CounterText>{likes}</CounterText>
          <CounterImage
            alt="달라요"
            src="https://s3.ap-northeast-2.amazonaws.com/harusijak-static-manage/static_image/%E1%84%83%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AD+%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%86%AB.svg"
          />
          <CounterText>{dislikes}</CounterText>
        </ReactionCounter>

        <CardActions disableActionSpacing>
          <ReactionContainer>
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
          </ReactionContainer>
        </CardActions>
      </StyledCard>
    );
  }
}

const StyledCard = styled(Card)`
  margin-bottom: 2vh;
  background: ${props => props.theme.lightGreyColor} !important;
  box-shadow: none !important;
  width: 90%;
`;

const ReactionCounter = styled.div`
  display: flex;
  padding-left: 1vw;
  align-items: center;
`;
const CounterImage = styled.img`
  :last-of-type {
    margin-left: 1vw;
  }
`;

const CounterText = styled.p`
  font-size: 0.8em;
  margin: 0;
`;

const ReactionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 2vh;
  border-top: 1px solid ${props => props.theme.defaultColor};
  align-items: center;
`;

const mapStateToProps = state => {
  return { token: state.auth.token };
};

export default connect(
  mapStateToProps,
  actions
)(PoemCard);
