import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


import './ContactForm.css';



export default function Contact() {
  const [state, handleSubmit] = useForm("mknlpnjv");
  if (state.succeeded) {
      return <p className='sub-heading'>Response guaranteed within 48 hours!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
    <p className='sub-heading'>Contact Form</p>
    <div>
      <label htmlFor="full-name">
        Full Name
      </label>
      &nbsp;
      <input
        id="name"
        type="text" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
    </div>
    <div>
      <label htmlFor="email">
        Email Address
      </label>
      &nbsp;
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
    <div>
      <button className='action-button' disabled={state.submitting}>
        submit
      </button>
    </div>
  </form>
);
}
