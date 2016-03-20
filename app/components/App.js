import React from 'react';
import Navbar from './Navbar';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="app">
          <Navbar />

          <div className="container">
            { this.props.children }
          </div>
        </div>
    );
  }
};


