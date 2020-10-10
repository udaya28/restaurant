import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Heading } from './components/heading/heading.component';
import {About } from './components/About/about.component';
import {Slides} from './components/slides/slides.component';
import {Footer} from './components/footer/footer.component'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Heading first="Parambariyam" second="Welcomes You" styles={{}}/>
      <About/>
      <Slides/>
      <Footer/>

    </div>
  );
}

export default App;
