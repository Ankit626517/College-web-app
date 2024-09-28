import React ,  {useState} from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa"
import "../Component/Navbar.css"
import { navItems} from "./NavbarItems"
import Dropdown from "./Dropdown";




function Navbar(){
    const [dropdown , setDropdown] = useState(false);
    return (
        <>
        <nav className="main-navbar">
        <Link to="/" className="main-navbar-logo">
        RSET
        <Icons.FaTree />
         </Link>
         <ul className="main-navbar-list">
            {navItems.map(item => {
                if (item.title === "▼ABOUT"){
                    return (
                        <li key={item.id} className={item.cName}
                        onMouseEnter={() => setDropdown(true)} 
                        onMouseLeave={() => setDropdown(false)}>
                            <Link to={item.path}  > {item.title} </Link>
                            {dropdown && <Dropdown/> }
                        </li>
        
        
                   );
                }
                return (
                <li key={item.id} className={item.cName}>
                    <Link to={item.path} >{item.icon} {item.title} </Link>
                   
                </li>


           ); })}
         </ul>

        </nav>
        
        </>
    );}

    export default Navbar;


