import React from 'react';
import './App.css';

import dummyData from "./instagram/src/dummy-data";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";

class App extends React.Component() {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(data => (
          <PostContainer data={data} />
        ))}
      </div>
    );
  }
}

export default App;
