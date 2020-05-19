import React from "react";
import PropTypes from "prop-types";
import "./Comment.css";

const Comment = props => {
    return (
        <p><strong>{props.comment.username} </strong>{props.comment.text}</p>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;