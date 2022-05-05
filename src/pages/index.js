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
      allFile(filter: { relativePath: { eq: "applications_open.jpg" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }

      file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            meta_page_description
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
          }
        }
      }
    }
  `);

  const indexData = data.file.childMarkdownRemark.frontmatter;
  const infoBlockArr = indexData.blocks;

  return (
    <Layout>
      <SEO title="" description={indexData.meta_page_description} />

      {/* Main graphic when the page loads*/}
      <MainGraphic
        image={indexData.image.childImageSharp.fluid}
        heading={indexData.heading}
      />

      {/* Main content */}
      <div className="container mb-5">
        {/* Recruiting section */}
        {/* TODO: REMOVE AT THE END OF RECRUITING */}
        <InfoBlock
          heading={"Join MHP!"}
          description={
            "Monash Human Power's 2021 recruitment is now open! Come join our team as we aim to build the fastest bike in Australia."
          }
          buttonText2={"More info"}
          href2={
            "https://docs.google.com/presentation/d/14wiwPjfxUd51Xmb0O59G0oaNowEzcm43EqR8rChSi10"
          }
          buttonText={"Apply Here!"}
          href={"https://forms.gle/fRsfEiXTxbA2gPfw8"}
          image={data.allFile.edges[0].node.childImageSharp.fluid}
          key={0}
          reverseOrder={0}
        />

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
              reverseOrder={index % 2 === 0}
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
