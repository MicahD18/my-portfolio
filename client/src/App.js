import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from "./containers";
import { Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
