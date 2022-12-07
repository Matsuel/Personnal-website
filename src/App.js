import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import './App.css';

const App = () =>{
  return (
    <>
    <Header/>
      <div className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </div>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App;
