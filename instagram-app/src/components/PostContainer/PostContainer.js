import React from "react";
import "./PostContainer.css";

import Post from "./Post"
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    return (
        <>
            <Post 
                username={props.username}
                thumbnailUrl={props.thumbnailUrl}
                imageUrl={props.imageUrl}
                likes={props.likes}
                // timestamp={props.timestamp}
            />
            <CommentSection comments={props.comments} />
        </>
    )
}

export default PostContainer;