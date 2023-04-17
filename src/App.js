import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
    // Initially empty array of robots
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }

    // Add robots after mounting
    componentDidMount() {
        // Update the state after Fetching from API using JSON
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        // Change state
        this.setState({ searchfield: event.target.value });
    };

    render() {
        const filteredRobots = this.state.robots.filter((robots) => {
            return robots.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });

        // Add condition if the robots is not yet loaded
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>;
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }
}

export default App;
