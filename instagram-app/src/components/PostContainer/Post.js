import React from "react";
import PropTypes from "prop-types";

const Post = props => {
    return (
        <>
            <div>
                <img src={props.thumbnailUrl} alt="Thumbnail for philzcoffee"></img>
                <h3>{props.username}</h3>
            </div>
            <img src={props.imageUrl} alt="Uploaded post"></img>
            <div>
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
            </div>
            <h3 className="likes">{props.likes} likes</h3>
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