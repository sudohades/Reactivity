import React from "react";
import "./DesktopMenu.css";
import { Link } from "react-router-dom";

const DesktopMenu = () => (
    <ul className="desktop-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link ></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
);

export default DesktopMenu;