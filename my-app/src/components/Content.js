// Content.js
import React, { Component } from "react";
import Loader from "./Loader"; // Import the Loader component
import PostItem from "./PostItem"; // Assuming you have a PostItem component


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // Simulate an API fetch delay with a timer
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000); // Update to be loaded after 2 seconds
  }

  render() {
    return (
      <div className="SearchResults">
        {this.state.isLoaded ? (
          // Render PostItem component if loaded
          <PostItem />
        ) : (
          // Otherwise, render Loader
          <Loader />
        )}
      </div>
    );
  }
}

export default Content;
