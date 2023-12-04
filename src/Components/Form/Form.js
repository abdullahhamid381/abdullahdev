import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Form.scss'
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

export const Form = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const form = useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.user_name;
    const emailInput = form.current.user_email;
    const messageInput = form.current.message;
    const phoneInput = form.current.phone;

    const errors = {};

    if (!nameInput.value.trim()) {
      errors.name = 'Name is required.';
    }

    if (!emailInput.value.trim()) {
      errors.email = 'Email is required.';
    }

    if (messageInput.value.trim() === '') {
      errors.message = 'Message is required.';
    }

    setErrors(errors);
    setSubmitAttempted(true);

    if (Object.keys(errors).length === 0) {
      // If there are no errors, proceed with sending the email
      emailjs
        .sendForm('service_q11f6w8', 'template_ncmyu6i', form.current, 'g3QzZsWB1sxp4GXpE')
        .then((result) => {
          console.log(result.text);
          // If the email is sent successfully, show the modal
          setSubmitSuccess(true);
          setSubmitError(false); // Reset error state on successful submission
          handleOpen();
        })
        .catch((error) => {
          console.log(error.text);
          // If there's an error, set the error state
          setSubmitError(true);
        });
    }
  };

  return (
<div className="form-parent">
  <div className='touch'>
    <h1>GET TOUCH ME?</h1>
    <p>For your car we will do everything advice design in us repairs and maintenance We are the some preferred.</p>
  </div>
<form ref={form} onSubmit={sendEmail}>
      <div className='name-parent'>
        <div>
          <label>Name</label>
        </div>
        <input type="text" name="user_name" placeholder='Your Name (Required)'/>
        {submitAttempted && errors.name && <p style={{ color: 'red' }} className='requ'>{errors.name}</p>}
      </div>

      <div className='email-parent'>
        <div>
          <label>Email</label>
        </div>
        <input type="email" name="user_email" placeholder='Email (Required)' />
        {submitAttempted && errors.email && <p style={{ color: 'red' }} className='requ'>{errors.email}</p>}
      </div>

      <div className='phone-label'>
        <div> <label>Phone</label></div>
        <input type="tel" name="phone" placeholder='Phone Number (Optional)'/>
      </div>

   
        <div className='message-parent'>
          <div>
            <label>Message</label>
          </div>
       
        <textarea name="message" className='message' placeholder='Message (Required)'/>
        {submitAttempted && errors.message && <p style={{ color: 'red' }} className='requ'>{errors.message}</p>}
      
      </div>

      <div>
        <input type="submit" value="Send" />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {submitSuccess ? (
            <>
              <div>
                <img src="./images/verify.gif" alt="" />
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Thank you for contacting us!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Your message has been sent successfully.
              </Typography>
            </>
          ) : submitError ? (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2" color="red">
                Error submitting the form.
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please try again later.
              </Typography>
            </>
          ) : submitAttempted ? (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2" color="red">
                Please fix the errors in the form.
              </Typography>
            </>
          ) : null}
        </Box>
      </Modal>
    </form>
</div>
  );
};
