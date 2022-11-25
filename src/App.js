//'App.js' file is the center of the application = wrap all components

//React needs to be imported in every component file
import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  //returns JSX that represents HTML in JavaScript
  return (
    //React components must always return a single parente JSX element. However, this element may have many children elements
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
