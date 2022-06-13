import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header, About, Work, Skills, Testimonial } from "./containers";
import { Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
      </div>
    );
  }
}

export default App;
