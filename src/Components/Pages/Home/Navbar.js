import React, { useState } from "react";

import "./HomeScss/Navbar.scss";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div div className="navbar-parent">
      <nav className="navbar">
        <div className="nav-container">
      
         <div className="logo">
     <img src="./images/logo.png" alt="" />
         </div>
       
     

          <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
          Home
            </li>
          
            <li className="nav-item">
        About
            </li>
           
           
            <li className="nav-item">
          Services
            </li>
         
  
            <li className="nav-item">
          Projects
            </li>
         
          </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <GiHamburgerMenu />{" "}
              </span>
            ) : (
              <span className="icon">
                <AiOutlineClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
