import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SwitchCards from './components/SwitchCards'
import { Route, Routes } from 'react-router-dom'





function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/domain" element={<SwitchCards />} />
    </Routes>
    </>
  )

}

export default App
