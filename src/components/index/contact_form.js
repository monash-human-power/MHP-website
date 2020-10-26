import React from "react";
import Button from "../button";
import styled from "styled-components";

const ContactUsHeading = styled.h2`
  background: black;
  color: white;
  align-text: centre;
`;

const ContactForm = ({ className }) => (
  <div className={className}>
    <div id="contact" className="row justify-content-md-center">
      <div className="col col-lg-6">
        {/* Contact Us Title */}
        <ContactUsHeading className="p-3">Contact Us</ContactUsHeading>

        <form
          // "name" attribute is what the form is called on Netlify
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* IMPORTANT: every input has to have a name attribute. This will show up on netlify UI */}

          {/* This hidden type is needed for the netlify form to work with Gatsby */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              placeholder=""
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="inputEmail">Email Address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder=""
              required
            />
          </div>

          {/* Text Input */}
          <div className="form-group">
            <label htmlFor="inputText">Message</label>
            <textarea
              name="message"
              className="form-control"
              id="inputText"
              placeholder=""
              required
            />
          </div>

          {/* Submit Button */}
          <div className="row justify-content-center">
            <div className="col-5">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default ContactForm;
