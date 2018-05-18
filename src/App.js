import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import "./App.css";
import Searchbar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import API_KEY from "./config_keys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: "surfboards" }, data => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
