import React from "react";

const withAuthenticate = App => LoginPage => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoggedIn: false,
                username: ""
            };
        }

        logIn = () => {
            this.setState( prevState => {
                return {isLoggedIn: !prevState.isLoggedIn}})
        }

        render() {
            return (
                {this.state.isLoggedIn ? <App /> : <LoginPage isLoggedIn={this.state.isLoggedIn} logIn={this.logIn} />}
            )
        }
    }
}

export default withAuthenticate;