import React from 'react';
import './App.css';

import dummyData from "./dummy-data";
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    console.log("CDM running");
    this.setState({ dummyData: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="postContainers">
          {this.state.dummyData.map(post => (
            <PostContainer post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;