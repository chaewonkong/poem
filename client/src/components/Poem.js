import React from "react";

const Poem = props => {
  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <h5 className="header">{props.title}</h5>
          </div>
          <div className="card-action">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Poem };
