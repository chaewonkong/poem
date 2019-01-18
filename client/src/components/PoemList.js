import React, { Component } from "react";
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
              // <li key={poem.id}>
              //   <h1>{poem.title}</h1>
              //   <p>{poem.content}</p>
              // </li>
              <div className="col s12 m7" key={poem.id}>
                <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                      <span className="card-title">{poem.title}</span>
                      <p>{poem.content}</p>
                    </div>
                    <div className="card-action right-align">
                      <a href="#">좋아요</a>
                      <a href="#">신고하기</a>
                    </div>
                  </div>
                </div>
              </div>
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
          <i className="material-icons">add</i>
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
