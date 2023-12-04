import React, { useEffect, useState } from 'react'
import Typed from "react-typed";
import './HomeScss/Hero.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div className='hero-main-parent'>

      <div className='hero-back'>
        <div className='text-img'>
          <div className="typing-animation">
            <h1>HI, I'M ABDULLAH!  CREATIVE <br />   <span><Typed
              strings={[
                'WEB DESIGNER',
                'WEB DEVELOPER',
                'FULL STACK DEV'
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            /></span></h1>
            <p>
            Dynamic ReactJS and Node.js developer with a formidable two-year track record. Expertise in crafting high-impact, responsive interfaces and robust server-side solutions. Demonstrated ability to innovate and streamline development processes. Ready to elevate your projects with my seasoned skills.</p>
            <div className='buttons'>
            <a href="Abdullah Hamid Cv.pdf" download='Abdullah Hamid Cv.pdf'>  <button className='download'>Download Cv <FiDownload /></button></a>
              <div className='play-parent' onClick={handleOpen}>
                <button className='play'><FaPlay style={{ marginTop: '5px', marginLeft: '5px' }} /> </button>
<span>Watch The Intro</span>
              </div>
             
                
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
                </Modal>
             


            </div>
          </div>
          <div className='my-img'>
            <img src="./images/myimg.png" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero