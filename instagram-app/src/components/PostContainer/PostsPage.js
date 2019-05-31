import React from "react";

import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: [],
            username: ""
        }
    }

    componentDidMount() {
        console.log("CDM running");
        this.setState({ dummyData: dummyData, username: this.props.username });
    }

    render() {
        return (
            <>
                <SearchBar />
                <div className="postContainers">
                {this.state.dummyData.map(post => (
                    <PostContainer post={post} username={this.state.username} key={post.id} />
                ))}
                </div>
            </>
        )
    }
}

export default PostsPage;