import React from "react";
import Button from "../button";

const ContactForm = () => (
  <div id="contact" className="row justify-content-md-center my-5">
    <div className="col col-lg-6">
      {/* Contact Us Title */}
      <h2 className="text-center">Contact Us</h2>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* This hidden type is needed for the netlify form to work */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="inputEmail">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="john.doe@gmail.com"
            required
          />
        </div>

        {/* Text Input */}
        <div className="form-group">
          <label htmlFor="inputText">Message</label>
          <textarea
            className="form-control"
            id="inputText"
            placeholder="I <3 MHP"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default ContactForm;
