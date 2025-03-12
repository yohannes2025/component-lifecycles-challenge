import React, { Component } from "react";
import Loader from "./Loader"; // Import the Loader component
import css from "./YourStyles.module.css"; // Adjust to your actual styles file
import PostItem from "./PostItem"; // Adjust this import according to your project structure

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      // Add other state properties if needed
    };
  }

  // Lifecycle method can be added here
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000); // Update state after 2 seconds
  }

  render() {
    return (
      <div className={css.SearchResults}>
        {!this.state.isLoaded ? <Loader /> : <PostItem />}{" "}
        {/* Render Loader or PostItem based on isLoaded */}
      </div>
    );
  }
}

export default Content;
