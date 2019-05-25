import React from "react";
import "./PostContainer.css";

import Post from "./Post"
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    return (
        <div className="postContainer">
            <Post
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
                imageUrl={props.post.imageUrl}
                likes={props.post.likes}
                // timestamp={props.post.timestamp}
            />
            <div className="commentSection">
                <CommentSection comments={props.post.comments} />
            </div>
        </div>
    )
}

export default PostContainer;