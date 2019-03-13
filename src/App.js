import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/header';
import Container from './components/container/container';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Container/>
      </div>
     
    );
  }
}

export default App;
