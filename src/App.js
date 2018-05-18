import React, { Component } from "react";
import "./App.css";
import API_KEY from "./config_keys";
import Searchbar from "./components/Searchbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
