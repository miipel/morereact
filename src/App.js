import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';
import './App.css';

class App extends Component {
  state = {
    length: 0,
    textInput: ''
  }


  textChangedHandler = (event) => {
    const input = event.target.value;
    const textLength = input.length;
    this.setState({
      length: textLength,
      textInput: input
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.textInput.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({ textInput: newText });
  }

  render() {
    const charList = this.state.textInput.split('').map((char, index) => {
      return <CharComponent
        key={index}
        click={() => this.deleteCharHandler(index)}
        character={char} />
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.textChangedHandler}
          value={this.state.textInput}
        />
        <p>
          {this.state.length}
        </p>
        <ValidationComponent length={this.state.length} />
        {charList}
      </div>
    );
  }
}

export default App;
