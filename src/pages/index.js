import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";
import MainGraphic from "../components/index/main_graphic";
import Sponsors from "../components/index/sponsors";
import Video from "../components/video";

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
            splash {
              heading
              body
              trailer_link
            }
            recruitment_open
            recruitment_link
            recruitment_info
            recruitment_description
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
  const splashData = indexData.splash;

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="row py-2"
        >
          <h2 style={{ textAlign: "center" }}>{splashData.heading}</h2>
          <p style={{ textAlign: "center" }}>{splashData.body}</p>
          <Video
            videoSrcURL={splashData.trailer_link}
            videoTitle={"MHP Trailer"}
          />
        </div>

        {/* Recruiting section */}
        {/* Use the recruitment_open toggle on index.md to show/hide this section */}
        {indexData.recruitment_open && (
          <InfoBlock
            heading={"Join MHP!"}
            description={indexData.recruitment_description}
            buttonText2={"More info"}
            href2={indexData.recruitment_info}
            buttonText={"Apply Here!"}
            href={indexData.recruitment_link}
            image={data.allFile.edges[0].node.childImageSharp.fluid}
            key={0}
            reverseOrder={0}
          />
        )}
        {/* Sponsor Section */}
        <Sponsors className="my-5 py-5" />

        {/* Contact Form */}
        <ContactForm className="my-5 py-5" />
      </div>
    </Layout>
  );
};

export default IndexPage;
