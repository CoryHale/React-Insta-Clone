import React from "react";
import { InputGroup, InputGroupAddon } from "reactstrap";
import "./CommentSection.css";

import Comment from "./Comment";

const CommentSection = props => {
    return (
        <>
           {props.comments.map(comment => (
            <Comment comment={comment} className="comment" />
            ))} 
            <form className="addCommentForm">
                <InputGroup className="input">
                    <input type="text" className="addComment" placeholder="Add a comment..." />
                    <InputGroupAddon addonType="append"><i className="far fa-ellipsis-h"></i></InputGroupAddon>
                </InputGroup>
                
            </form>
        </>
    )
}

export default CommentSection;