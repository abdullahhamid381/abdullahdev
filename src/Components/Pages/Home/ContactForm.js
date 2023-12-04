import React from 'react'
import './HomeScss/ContactForm.scss'
import { Form } from '../../Form/Form'
const ContactForm = () => {
  return (
    <div className='contact-form-parent'>
        <div className='contact-back'> 
            <div className='text'>
<h1>Design <span>and <br /> Innovation</span></h1>
            </div>
            <div>
            <Form/>
            </div>
        </div>
       
    </div>
  )
}

export default ContactForm