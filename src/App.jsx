import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './newComponents/Navbar/Navbar';
import Blog from './newComponents/Focus/Blog';
import Contact from './newComponents/Focus/Contact';
import Home3 from './pages/Home3';
import HomePage from './pages/Home2';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home3 />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );

};

export default App;
