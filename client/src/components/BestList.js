import React, { Component } from "react";

class BestList extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <h2 className="header">Horizontal Card</h2>
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { BestList };
