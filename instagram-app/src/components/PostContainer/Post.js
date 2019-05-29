import React from "react";
import PropTypes from "prop-types";
import "./Post.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: "",
            username: "",
            imageUrl: "",
            likes: null,
            liked: false
        }
    }

    componentDidMount() {
        this.setState({
            thumbnailUrl: this.props.thumbnailUrl,
            username: this.props.username,
            imageUrl: this.props.imageUrl,
            likes: this.props.likes,
        })
    }

    likePost = e => {
        e.preventDefault();
        let amount = (this.state.liked ? -1 : 1)
        this.setState( prevState => {
            return { likes: prevState.likes + amount, liked: !prevState.liked }})
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
                        <i className={this.state.liked ? "fas fa-heart fill" : "fal fa-heart"} onClick={this.likePost}></i>
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