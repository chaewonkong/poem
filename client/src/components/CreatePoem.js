import React, { Component } from "react";

class CreatePoem extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label for="last_name">제목</label>
          </div>
        </div>
        <a href="/">
          <button className="right waves-effect waves-light btn">
            작성완료
          </button>
        </a>
        <a href="/">
          <button className="right waves-effect waves-light btn">
            작성취소
          </button>
        </a>
      </div>
    );
  }
}

export { CreatePoem };
