import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App() {
    // Initially empty array of robots
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: "",
    //     };
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");

    // Add robots after mounting
    // componentDidMount() {
    //     // Update the state after Fetching from API using JSON
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((users) => this.setState({ robots: users }));
    // }

    const onSearchChange = (event) => {
        console.log(event.target.value);
        // Change state
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // Add condition if the robots is not yet
    return !robots.length ? (
        <h1>Loading</h1>
    ) : (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
