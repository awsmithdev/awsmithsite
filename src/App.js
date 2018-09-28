import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

class App extends Component {
  state = {
    cat: '',
    dog: '',
  }
  render () {
    const { cat } = this.state
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
        <p>{cat}</p>
      </div>
    );
  }
}

export default App;
