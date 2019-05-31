import React from "react";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
            username: "",
            password: ""
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = () => {
        if (this.state.username !== "" && this.state.password !== "") {
            window.localStorage.setItem("username", JSON.stringify(this.state.username))
            this.props.logIn(); 
        } else {
            alert("username AND password required");
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="welcome">
                    <h1 className="loginHeader">Welcome to Instagram Clone</h1>
                    <h3 className="loginTag">Login</h3>
                    <form className="loginForm" onSubmit={this.login}>
                        <div className="inputs">
                            <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} placeholder="username" />
                            <input type="text" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="password" />
                        </div>
                        <button className="loginButton" onClick={this.login}>LOGIN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login