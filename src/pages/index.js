import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";
import MainGraphic from "../components/index/main_graphic";
import Sponsors from "../components/index/sponsors";
import Video from "../components/video";
import Button from "../components/button";
import styled from "styled-components";
import { SectionHeading, SectionParagraph } from "../components/content";

const IndexSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
              about_link
              bike_link
              competitions_link
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
        <IndexSection className="row py-2">
          <SectionHeading>{splashData.heading}</SectionHeading>
          <SectionParagraph>{splashData.body}</SectionParagraph>
          <Video
            videoSrcURL={splashData.trailer_link}
            videoTitle={"MHP Trailer"}
          />
        </IndexSection>

        <div className="row py-2">
          <div className="col mb-3">
            <Button href={splashData.about_link}>About Us</Button>
          </div>
          <div className="col mb-3">
            <Button href={splashData.bike_link}>Our Bikes</Button>
          </div>
          <div className="col mb-3">
            <Button href={splashData.competitions_link}>
              The Competitions
            </Button>
          </div>
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
