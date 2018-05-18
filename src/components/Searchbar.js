import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ term: e.target.value })} />
      </div>
    );
  }
}

export default Searchbar;
