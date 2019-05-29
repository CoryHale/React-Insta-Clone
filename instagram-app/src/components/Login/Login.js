import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
        }
    }

    login = () => {
        this.props.logIn()
    }

    render() {
        return (
            <>
                <form className="loginForm" onSubmit={this.login}>
                    <input type="text" name="username" placeholder="username" />
                    <input type="text" name="password" placeholder="password" />
                    <button onClick={this.login}>Login</button>
                </form>
            </>
        )
    }
}

export default Login