import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";

// TODO: remove these and put something more permanent
import MHP_green_crosshair from "../images/Group 4.svg";
import MHP_bike_graphic from "../images/outter_bike.png";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            blocks {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              href
              heading
              description
              buttonText
              id
            }
          }
        }
      }
    }
  `);

  const infoBlockArr = data.file.childMarkdownRemark.frontmatter.blocks;

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
          {infoBlockArr.map((blockData, index) => (
            <InfoBlock
              heading={blockData.heading}
              description={blockData.description}
              buttonText={blockData.buttonText}
              href={blockData.href}
              image={blockData.image.childImageSharp.fluid}
              key={index}
              // Example key would be 1 (index of the data)
              id={blockData.id}
              // Flips the order for every second block
              reverseOrder={index % 2 === 1}
            />
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm></ContactForm>
      </div>
    </Layout>
  );
};

export default IndexPage;
