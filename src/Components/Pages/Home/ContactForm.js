import React from 'react'
import './HomeScss/ContactForm.scss'
import { Form } from '../../Form/Form'
const ContactForm = () => {
  return (
    <div className='contact-form-parent'>
      <div className='contact-back'>
        <div className='text'>
          <h1>Contact <span>With Me</span></h1>
          <p>
            <li>Project Overview: Our project aims to create a dynamic and user-friendly web application that seamlessly connects users with relevant information and services.</li>

            <li>
              Key Features: The platform boasts intuitive navigation, personalized user profiles, and a robust search functionality to enhance the overall user experience.
            </li>

            <li>Technological Stack: Built using cutting-edge technologies such as React for the front end, Node.js for the server, and MongoDB for the database, our project ensures scalability and performance.</li>

            <li>
              Responsive Design: With a mobile-first approach, the application adapts to various screen sizes, ensuring accessibility for users on different devices.
            </li>

            <li>
              User Authentication: A secure user authentication system guarantees data privacy and allows users to create accounts, manage profiles, and access personalized content.
            </li>

          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>

    </div>
  )
}

export default ContactForm