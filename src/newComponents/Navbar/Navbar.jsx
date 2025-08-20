import React, {useState} from "react";
import "./Navbar.css"
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">JESSE-2.0 </div>
            <div className="desktopMenu">
                <DesktopMenu />
            </div>
            <div className="mobileMenuIcon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
               { /* Place some icon here for the menu*/}
            </div>
            {isMobileOpen && <MobileMenu />}
        </nav>
    );
};
export default Navbar;