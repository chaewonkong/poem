import React, { Component } from "react";
import styles from "../css/PoemList.css";
import { BestList, TodayList } from "./";
import ReactScrollableList from "react-scrollable-list";

class PoemList extends Component {
  state = { poems: [] };

  componentWillMount() {
    this.getPoems();
  }

  getPoems = async () => {
    const data = await fetch("/api/poems");
    const json = await data.json();
    const poems = [];
    for (let user in json.today)
      poems.push({
        id: json.today[user].id,
        content: json.today[user].content
      });
    this.setState({ poems });
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <BestList />
        <TodayList />
        <ReactScrollableList
          listItems={this.state.poems}
          heightOfItem={100}
          maxItemsToRender={50}
        />
      </div>
    );
  }
}

export { PoemList };
