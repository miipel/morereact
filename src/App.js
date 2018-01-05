import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'
import './App.css';

class App extends Component {
  state = {
    length: 0
  }


  textChangedHandler = ( event ) => {
    const input = event.target.value;
    const textLength = input.length;
    this.setState({
      length: textLength
    })
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangedHandler}
        />
        <p>
          {this.state.length}
        </p>
        <ValidationComponent value={this.state.length}/>
      </div>
    );
  }
}

export default App;
