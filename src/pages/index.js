import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";
import MainGraphic from "../components/index/main_graphic";
import Sponsors from "../components/index/sponsors";
import SubTeams from "../components/index/subteams";

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

            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }

            heading
          }
        }
      }
    }
  `);

  const indexData = data.file.childMarkdownRemark.frontmatter;
  const infoBlockArr = indexData.blocks;

  return (
    <Layout>
      <SEO title="Home" />

      {/* Main graphic when the page loads*/}
      <MainGraphic
        image={indexData.image.childImageSharp.fluid}
        heading={indexData.heading}
      />

      {/* Main content */}
      <div className="container mb-5">
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

        {/* Sub-Teams Section */}
        <SubTeams className="my-5 py-5" />

        {/* Sponsor Section */}
        <Sponsors className="my-5 py-5" />

        {/* Contact Form */}
        <ContactForm className="my-5 py-5" />
      </div>
    </Layout>
  );
};

export default IndexPage;
