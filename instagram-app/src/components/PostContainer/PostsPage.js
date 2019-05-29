import React from "react";

import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: [],
        }
    }

    componentDidMount() {
        console.log("CDM running");
        this.setState({ dummyData: dummyData });
    }

    render() {
        return (
            <>
                <SearchBar />
                <div className="postContainers">
                {this.state.dummyData.map(post => (
                    <PostContainer post={post} key={post.id} />
                ))}
                </div>
            </>
        )
    }
}

export default PostsPage;