
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Videos from '../pages/Videos';
import Create from '../pages/Create';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="videos" element={<Videos />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
