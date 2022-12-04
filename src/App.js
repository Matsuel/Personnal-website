import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () =>{
  return (
    <>
    <Header/>
      <div className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
      </div>
    </>
  )
}

export default App;
