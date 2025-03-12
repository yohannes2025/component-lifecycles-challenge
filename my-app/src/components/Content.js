// Content.js
import React, { Component } from "react";
import Loader from "./Loader";
import css from "./Loader.module.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // Simulate an API fetch delay
    this.timer = setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
  }

  componentWillUnmount() {
    // Clean up the timer when the component is unmounted
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className={css.SearchResults}>
        {this.state.isLoaded ? (
          // Render the PostItem component when isLoaded is true
          <PostItem />
        ) : (
          // Render the Loader component when isLoaded is false
          <Loader />
        )}
      </div>
    );
  }
}

export default Content;
