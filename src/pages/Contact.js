// src/pages/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => (
  <><div className="contact">
    <h2>Contactez-nous</h2>
    <form className="contact-form">
      <label>
        Nom :
        <input type="text" name="name" required />
      </label>
      <label>
        Email :
        <input type="email" name="email" required />
      </label>
      <label>
        Message :
        <textarea name="message" rows="5" required></textarea>
      </label>
      <button type="submit">Envoyer</button>
    </form>
  </div><footer /></>

);

export default Contact;
