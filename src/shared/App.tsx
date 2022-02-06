import React from 'react';
import { Routes, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import RoutesList from './Routes';

const App = () => {
  return (
    <div>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/about">About</Link></p>
      <hr />

      <RoutesList />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
};

export default App;
