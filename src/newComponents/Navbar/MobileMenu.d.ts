import React from "react";
import "./MobileMenu.css";


const links = [
    {href:"#", label:"Home"},
    {href:"#", label:"Blog"},
    {href:"#", label:"Contact"},
    {href:"#", label:"Login"},
]

const MobileMenu = ({open, onClose}) => {
   return(
    <aside className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
         <nav>
            <ul className="mobile-links">
                {links.map((l, i) => (
                    <li className="mobile-link" style={{ "--i": i }} key={l.label}>
                        <a href={l.href} onClick={onClose}>{l.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
   );
};
export default MobileMenu;