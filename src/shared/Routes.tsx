import React from 'react';
import About from './About';
import Home from './Home';
import { useRoutes } from 'react-router-dom';

export const routeList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

const RouteFC = () => {
  return useRoutes(routeList);
};

export default RouteFC;
