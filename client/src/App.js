import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, PoemList, Footer } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PoemList />
        <Footer />
      </div>
    );
  }
}

export default App;
