// Content.js
import React, { Component } from 'react';
import Loader from './Loader';
import css from './Content.module.css';
import PostItem from './PostItem';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    // Simulate an API fetch delay
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);
  }

  render() {
    return (
      <div className={css.SearchResults}>
        {this.state.isLoaded ? (
          <PostItem />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Content;

// Loader.js
import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return <div className={css.Loader}></div>;
};

export default Loader;

/* Loader.module.css */
.Loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
