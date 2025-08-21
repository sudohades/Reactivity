import React, {useEffect, useState, useCallback} from "react";
import "./Navbar.css"
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { div } from "framer-motion/client";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const closeMenu = useCallback(() => setIsMobileOpen(false), []);
    const toggleMenu = useCallback(() => setIsMobileOpen(v => !v), []);

    //locking the menu scroll when menu is open(so that scrolling the menu doesn't scroll the webpage on the phone)
    useEffect(() => {
        document.body.classList.toggle("no-scroll", isMobileOpen);
        return () => document.body.classList.remove("no-scroll");
    }, [isMobileOpen]);

    //close the menu when user escapes
    useEffect(() => {
        if(!isMobileOpen) return;
        const onEscKey = (e) => e.key === "Escape" && closeMenu();
        window.addEventListener("keydown", onEscKey);
        return () => window.removeEventListener("keydown", onEscKey);
    }, [isMobileOpen, closeMenu]);


    return (
        <nav className="navbar">
            <div className="logo">JESSE-2.0 </div>
            <div className="desktopMenu">
                <DesktopMenu />
            </div>
            <div className={`hamburger ${isMobileOpen ? "is-active" : ""}`} onClick={(toggleMenu)}>
               { /* Place some icon here for the menu*/}
               <span className="bar"/>
               <span className="bar"/>
               <span className="bar"/>
            </div>
            {isMobileOpen && <div className="backdrop" onClick={closeMenu} aria-hidden="true"/>}
        </nav>
    );
};
export default Navbar;