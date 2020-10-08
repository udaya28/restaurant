import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Heading } from './components/heading/heading.component';
import {About } from './components/About/about.commponent';

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Heading first="Parambriym" second="Welcomes you" styles={{}}/>
      <About/>
    </div>
  );
}

export default App;
