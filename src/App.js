import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import NavContainer from './containers/NavContainer'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <NavContainer />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
