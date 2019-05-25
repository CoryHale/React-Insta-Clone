import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

const Post = props => {
    return (
        <>
            <div className="heading">
                <img src={props.thumbnailUrl} alt="Thumbnail for philzcoffee"></img>
                <h3>{props.username}</h3>
            </div>
            <img src={props.imageUrl} alt="Uploaded post"></img>
            <div className="lowerSection">
                <div className="icons">
                    <i className="fal fa-heart"></i>
                    <i className="fal fa-comment"></i>
                </div>
                <h3 className="likes">{props.likes} likes</h3>
            </div>
        </>
    )
}

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
}

export default Post;