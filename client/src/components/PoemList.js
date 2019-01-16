import React, { Component } from "react";
import styles from "../css/PoemList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BestList, TodayList, Poem } from "./";

class PoemList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.mainContainer}>
        <Link
          to="/poems/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ poems }) => {
  return { poems };
};

export default connect(mapStateToProps)(PoemList);
