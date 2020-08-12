import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";
import MainGraphic from "../components/index/main_graphic";

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

      {/* Main graphic when the page loads*/}
      <MainGraphic />

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
        <ContactForm />
      </div>
    </Layout>
  );
};

export default IndexPage;
