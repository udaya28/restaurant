import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { Heading } from './components/heading/heading.component';
import {About } from './components/About/about.component';
import {Slides} from './components/slides/slides.component';
import {Footer} from './components/footer/footer.component'
import {CardList} from './components/card-list/card-list.component'
import {MapContainer} from './components/maps/maps.component'
import {Contact} from './components/contact/contact.component'
function App() {
  
  return (
    <div className="App">
      <Header />
      <Heading first="Parambariyam" second="Welcomes You" styles={{}}/>
      <About/>
      <Slides/>
      <CardList/>
      <MapContainer/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
