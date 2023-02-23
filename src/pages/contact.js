
import React, {useEffect, useState } from 'react'
export default 

function Contact() {
    return (
      <div class="contact-container">
      <h1>Contact Us</h1>
      <p>Welcome to our contact page! We're here to help you with anything you need. Whether you have a question about a product, need help with an order, or just want to say hello, we'd love to hear from you.</p>
      
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
      
      <p>You can also reach us by:</p>
      <ul>
        <li>Email: <a href="mailto:support@amazing-store.com">support@amazing-store.com</a></li>
        <li>Phone: 1-800-123-4567</li>
        <li>Live Chat: Click the chat bubble in the bottom right corner of your screen</li>
        <li>Social Media: Connect with us on Facebook, Twitter, or Instagram</li>
      </ul>
      
      <p>Our team is dedicated to providing you with the best possible customer service, and we'll do our best to respond to your inquiry as soon as possible. Thank you for choosing our web store!</p>
    </div>
    
    )
  }

