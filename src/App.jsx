import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './newComponents/Navbar/Navbar';
import Home from './newComponents/Focus/Home';
import Blog from './newComponents/Focus/Blog';
import Contact from './newComponents/Focus/Contact';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );

};

export default App;
