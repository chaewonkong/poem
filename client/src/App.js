import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, PoemList, Footer } from "./components";

const CreatePoem = () => {
  return (
    <div>
      <h2>Let's Create Poem</h2>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={PoemList} />
          <Route path="/poems/new" component={CreatePoem} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
