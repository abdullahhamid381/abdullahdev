import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEmail } from "react-icons/md";
import "./HomeScss/Navbar.scss";
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Form } from "../../Form/Form";
import { PopupForm } from "../../Form/PopupForm";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: '#09101A',
  
  boxShadow: 24,
 
};
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div div className="navbar-parent">
      <nav className="navbar">
      
      
         <div className="logo">
     <img src="./images/logo.png" alt="" />
         </div>
       
     

          <div style={{marginLeft:'-80px'}}>
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
          <div className="contact" style={{marginRight:''}}>
    <button onClick={handleOpen}><MdEmail style={{marginTop:'10px'}}/></button>
         </div>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         <PopupForm/>
          </Typography>
        
        </Box>
      </Modal>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <GiHamburgerMenu />{" "}
              </span>
            ) : (
              <span className="icon" >

                <AiOutlineClose />
              </span>
            )}
          </div>
      
      </nav>
    </div>
  );
}

export default Navbar;
