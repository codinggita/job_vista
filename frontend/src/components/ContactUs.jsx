import React from 'react'
import'../css/ContactUs.css'
function ContactUs() {
    return (
      <>
      <div className='bodyy'>
      <div className="contact-us-container">
        <h2 className="contact-us-heading">Contact Us</h2>
        <p className="contact-us-description">
          We'd love to hear from you! Fill out the form below to send us a message.
        </p>
  
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" required className="form-input" />
          </div>
  
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address:</label>
            <input type="email" id="email" name="email" required className="form-input" />
          </div>
  
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <select id="subject" name="subject" className="form-select">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
            </select>
          </div>
  
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" name="message" required className="form-textarea" />
          </div>
  
          <button type="submit" className="contact-us-button">Send Message</button>
        </form>
      </div>
      </div>
      </>
    );
  }
  
  export default ContactUs;
  
  
