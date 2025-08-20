import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SwitchCards from './components/SwitchCards'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home2'
import UserProfile from './pages/UserProfile'
import Layout, { Footer, NavBar } from './components/Layout'



function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="domain" element={<SwitchCards />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Routes>
        <HomePage />
        <Footer />
      </Layout>
    </>
  )

}

export default App
