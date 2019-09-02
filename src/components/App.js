import React, { Component } from 'react';
import '../styles/App.css';
// import Button from './Button';
import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="quoteApp">
        <Quote />
      </div>
    );
  }
}

export default App;
