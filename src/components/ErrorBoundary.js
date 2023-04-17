import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        // Condition in handling error
        if (this.state.hasError) {
            return <h1>Oooops. There is an error!</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
