import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class CreatePoem extends Component {
  render() {
    return (
      <div>
        <form>
          <TextField
            id="title"
            fullWidth
            label="시 제목"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="서시"
          />
          <TextField
            id="content"
            className="asdf"
            fullWidth
            label="시 내용"
            multiline
            margin="normal"
            variant="outlined"
            rows="10"
            placeholder={`
          죽는 날까지 하늘을 우러러
          한점 부끄럼이 없기를
          잎새에 이는 바람에도
          나는 괴로워했다
          별을 노래하는 마음으로
          모든 죽어가는 것을 사랑해야지
          그리고 나한테 주어진 길을
          걸어가야겠다.
          
          오늘 밤에도 별이 바람에 스치운다.`}
          />
        </form>
        <Link to="/">
          <button className="right waves-effect waves-light btn">
            작성완료
          </button>
        </Link>
        <Link to="/">
          <button className="right waves-effect waves-light btn">
            작성취소
          </button>
        </Link>
      </div>
    );
  }
}

export { CreatePoem };
