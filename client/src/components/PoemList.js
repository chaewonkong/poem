import React, { Component } from "react";
import styles from "../module_css/PoemList.module.css";
import { BestList, TodayList } from "./";

class PoemList extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <BestList />
        <TodayList />
      </div>
    );
  }
}

export { PoemList };
