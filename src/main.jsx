import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import Jordans from './components/jordans/Jordans.jsx';
import Mens from './components/mens/Mens.jsx';
import Kids from './components/kids/Kids.jsx';
import Womens from './components/womens/Womens.jsx';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/jordan" element={<Jordans />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/womens" element={<Womens />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);
