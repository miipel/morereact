import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';
import './App.css';

class App extends Component {
  state = {
    length: 0,
    textInput: []
  }


  textChangedHandler = (event) => {
    const input = event.target.value;
    const textLength = input.length;
    const charArray = input.split('');
    this.setState({
      length: textLength,
      textInput: charArray
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
        <ValidationComponent length={this.state.length} />

        {this.state.textInput.map((char, index) => {

          return <CharComponent
            char={this.state.textInput[index]}
            key={index} />
        })}
      </div>
    );
  }
}

export default App;
