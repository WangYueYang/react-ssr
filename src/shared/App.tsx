import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import RouteFC from './routes'

const App = () => {
  return (
    <div>
      <p>
        <Link to="/">home</Link>
      </p>
      <p>
        <Link to="/about">about</Link>
      </p>
      <RouteFC /> 
    </div>
  );
};

export default App;
