import '../CSS/App.css';
import logo from '../logo.svg';
import React, { useState } from 'react';

const Recipes = () => {
  return(
    <div className='Recipes'>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="Recipes-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recipes
          </a>
        </header>
    </div>
  )
}

export default Recipes;