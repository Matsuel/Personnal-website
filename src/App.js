import React from 'react';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import './App.css';

const App = () =>{
  return (
    <>
    <Header/>
      <div className='main'>
        <Home/>
      </div>
    </>
  )
}

export default App;
