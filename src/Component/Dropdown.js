import React , {useState} from 'react'
import {AboutDropdown} from "./NavbarItems"
import {Link} from "react-router-dom"
import "./Dropdown.css"


function Dropdown() {
    const [dropdown , setDropdown] = useState(false);

  return (
    <>
   <ul className={dropdown ? " navbar_Dropdown_main_box clicked": "navbar_Dropdown_main_box" } onClick={()=>setDropdown(!dropdown)}>
    {AboutDropdown.map(item => {
        return (
            <li key={item.id}>
                <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link>   
            </li>
        )
    })}
   </ul>

      
    </>
  )
}

export default Dropdown
