import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from './Home';
import About from './About';

export const RouteList = [
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    // loadData: About.loadData
  },
]

const RoutesList = () => {
  const ele = useRoutes(RouteList);
  return ele
};

export default RoutesList;
