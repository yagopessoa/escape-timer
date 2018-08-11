import React, { Component } from 'react';
import './App.css';
import Cronometro from './components/Cronometro';
import 'typeface-roboto';

class App extends Component {

  render() {
    return (
      <div class="App">
        <Cronometro />
      </div>
    );
  }
}

export default App;
