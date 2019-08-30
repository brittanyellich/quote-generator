import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello, World!',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <div className="app">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default App;
