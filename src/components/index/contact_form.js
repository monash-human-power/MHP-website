import React from "react";
import Button from "../button";
import { SectionHeading } from "../content";

/**
 * Component for the contact form in outreach and home page.
 * @param className Additional classes to pass
 */
const ContactForm = ({ className }) => (
  <div className={className}>
    <div id="contact" className="row justify-content-md-center">
      <div className="col col-lg-6">
        {/* Contact Us Title */}
        <SectionHeading className="p-3">Contact Us</SectionHeading>

        <form
          name="contact" // "name" HTML attribute is the displayed form name on Netlify
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* IMPORTANT: Every input has to have a name attribute. This will show up on netlify UI. */}

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
          <div className="row py-2 justify-content-center">
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
