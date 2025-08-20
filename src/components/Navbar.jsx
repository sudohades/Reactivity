import { useState } from 'react'
import './commonStyles.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SwitchCards from './SwitchCards'
import App from '../App'
import Layout from './Layout'

function Navbar(){
    return (
        <div className='header'>
            <ul className="navButtons">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/domain">DOMAIN__EXPANSION</Link></li>
                    <li>HVDES:~ touch<any id="blinking">_</any></li>
            </ul>
        </div>
    )
}   

export default Navbar