import React, {useState} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {

  const[open, setOpen] = useState(false);
  const toggle = () =>   setOpen(!open); 
  const closeMenu = () =>  setOpen(false);
  

  return (
    <nav>
      <div className="top">
      <h1>TechyHub</h1>
      <div  onClick={toggle} className="nav-icons">
        {open ? <FiX /> : <FiMenu />}
       
      </div>
      </div>
      <main className= {open ? 'nav-link' : 'nav-linkUnseen'}>
        <HashLink to={"/#home"}  onClick={closeMenu} >Home</HashLink>
        <Link to={"/contact"} onClick={closeMenu}>Contact</Link>
        <HashLink to={"/#about"} onClick={closeMenu}>About</HashLink>
        <HashLink to={"/#brand"} onClick={closeMenu}>Brands</HashLink>
        <Link to={"/service"} onClick={closeMenu}>Services</Link>
      </main>
      
    </nav>
  );
}

export default Header;
