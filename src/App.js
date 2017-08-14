import React, { Component } from 'react';
import Navbar from './navbar';
import Searchbar from './components/searchbar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header text-center">
          <h2>Wikipedia Viewer</h2>
          <h3>Free Code Camp Front End Project</h3><br/>
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png" className="App-logo" alt="logo" />
          </a>
          <h5>Click the Wikipedia logo for a random quote!</h5>
        </div>
        <div className="container">
          <Searchbar />
        </div>

      </div>
    );
  }
}
