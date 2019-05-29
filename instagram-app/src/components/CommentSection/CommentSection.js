import React from "react";
import { InputGroup, InputGroupAddon } from "reactstrap";
import "./CommentSection.css";

import Comment from "./Comment";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ""
        }
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    addNewComment = e => {
        e.preventDefault();
        const comment = {
            username: "Lambda4Life",
            text: this.state.newComment
        }
        this.setState({
            comments: [...this.state.comments, comment],
            newComment: ""
        })
    }

    render() {
        return (
            <>
            {this.state.comments.map(comment => (
                <Comment comment={comment} className="comment" />
                ))} 
                <form className="addCommentForm" onSubmit={this.addNewComment}>
                    <InputGroup className="input">
                        <input type="text" name="newComment" value={this.state.newComment} onChange={this.changeHandler} className="addComment" placeholder="Add a comment..." />
                        <InputGroupAddon addonType="append"><i className="far fa-ellipsis-h"></i></InputGroupAddon>
                    </InputGroup>
                    
                </form>
            </>
        )
    }
}

export default CommentSection;