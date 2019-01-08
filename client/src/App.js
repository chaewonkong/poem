import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, PoemList, Footer } from "./components";

const Landing = () => {
  return (
    <div>
      <Header />
      <PoemList />
      <Footer />
    </div>
  );
};

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
          <Route path="/" component={Landing} />
          <Route path="/new" component={CreatePoem} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
