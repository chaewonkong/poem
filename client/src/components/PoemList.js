import React, { Component } from "react";
import styles from "../css/PoemList.css";
import { BestList, TodayList, Poem } from "./";

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
        title: json.today[user].title,
        content: json.today[user].content
      });
    this.setState({ poems });
  };

  renderPoems() {
    const poems = this.state.poems;
    return poems.map(poem => {
      const { title, id, content } = poem;
      return <Poem title={title} id={id} content={content} />;
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        {this.renderPoems()}
        <a
          href="/poems/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export { PoemList };
