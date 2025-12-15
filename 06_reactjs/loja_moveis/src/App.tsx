import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/molecules/MainNavbar';
import Home from './components/pages/Home';
import Footer from './components/organisms/Footer';
import Categories from './components/organisms/Categories';

export default function App(){
  return (
    <Router>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#categories" element={<Categories />} />
      </Routes>
      <Footer />
    </Router>
  );
}