import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import Button from "../components/button";

import MHP_green_crosshair from "../images/Group 4.svg";
import MHP_bike_graphic from "../images/outter_bike.png";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query xxxxx {
      file(relativePath: { eq: "main_raceday_2.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />

      {/* Bike graphic */}
      <div
        className="container-fluid py-5"
        style={{
          background: `repeat center/50px url(${MHP_green_crosshair}), black`,
        }}
      >
        <div className="row justify-content-center pt-4 mt-4">
          <img src={MHP_bike_graphic} alt="MHP bike graphic" />
        </div>

        <div className="row justify-content-center">
          <h1
            style={{
              color: "white",
              backgroundColor: "black",
              textAlign: "center",
            }}
            className="p-2 m-3"
          >
            MONASH HUMAN POWER
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container my-5">
        {/* Info Blocks */}
        <div>
          <InfoBlock
            heading="Who we are"
            buttonText="Meet the team"
            href="/team"
            reverseOrder={false}
            image={data.file.childImageSharp.fluid}
          />
          <InfoBlock
            heading="Our Mission"
            buttonText="See the bike"
            href="/bike"
            reverseOrder={true}
            image={data.file.childImageSharp.fluid}
          />
          <InfoBlock
            heading="Our Goal"
            buttonText="See the race"
            href="/race"
            reverseOrder={false}
            image={data.file.childImageSharp.fluid}
          />
          <InfoBlock
            heading="Outreach"
            buttonText="See the outreach"
            href="/outreach"
            reverseOrder={true}
            image={data.file.childImageSharp.fluid}
          />
        </div>

        {/* Contact form */}
        <a name="contact" />

        {/* Add y axis margin for clarity */}
        <div className="row justify-content-md-center my-5">
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
                <label for="inputName">Name</label>
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
                <label for="inputEmail">Email Address</label>
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
                <label for="inputText">Message</label>
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
      </div>
    </Layout>
  );
};

export default IndexPage;
