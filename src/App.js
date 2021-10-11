import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import history from './history';

function App() {
  return (
    <BrowserRouter history={history}>
    <div className="App">
      <Routes />    
      </div>
      </BrowserRouter>
  );
}

export default App;