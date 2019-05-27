import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: props.thumbnailUrl,
            username: props.username,
            imageUrl: props.imageUrl,
            likes: props.likes
        }
    }

    likePost = e => {
        e.preventDefault();
        const newLikes = this.state.likes + 1;
        this.setState({ likes: newLikes })
    }

    render() {
        return (
            <>
                <div className="heading">
                    <img src={this.state.thumbnailUrl} alt="Thumbnail for philzcoffee"></img>
                    <h3>{this.state.username}</h3>
                </div>
                <img src={this.state.imageUrl} alt="Uploaded post"></img>
                <div className="lowerSection">
                    <div className="icons">
                        <i className="fal fa-heart" onClick={this.likePost}></i>
                        <i className="fal fa-comment"></i>
                    </div>
                    <h3 className="likes">{this.state.likes} likes</h3>
                </div>
            </>
        )
    }
}

Post.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
}

export default Post;