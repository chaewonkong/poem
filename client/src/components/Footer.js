import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "../css/Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Button>시</Button>
        <Button>내 정보</Button>
        <Button>더 보기</Button>
      </div>
    );
  }
}

export { Footer };
