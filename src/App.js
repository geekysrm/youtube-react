import React, { Component } from "react";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import "./App.css";
import Searchbar from "./components/Searchbar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import API_KEY from "./config_keys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ videos: data, selectedVideo: data[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    //throttling done above - search triggers once every 300 millisecongs
    return (
      <div className="App">
        <Searchbar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            this.setState({
              selectedVideo
            })
          }
          videos={this.state.videos}
        />
        {/*Above code means the code ( selectedVideo => this.setState({ selectedVideo } ) will be executed when the func onVideoSelect is called in any of the children of App component*/}
      </div>
    );
  }
}

export default App;
