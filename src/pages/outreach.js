import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";
import InfoBlock from "../components/info_block";
import ContactForm from "../components/index/contact_form";

const ReviewCol = styled.div`
  border: 1px solid black;

  /* Dispose of shadow */
  transition: 0.1s;

  &:hover {
    /* Show shadow */
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const BikePage = () => {
  const data = useStaticQuery(graphql`
    query OutreachPageQuery {
      file(
        relativePath: { eq: "outreach.md" }
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
              heading
              description
              id
            }
            reviews {
              person
              quote
            }
          }
        }
      }
    }
  `);

  const outreachData = data.file.childMarkdownRemark.frontmatter;
  const infoBlockArr = outreachData.blocks;
  const reviewsArr = outreachData.reviews;

  return (
    <Layout>
      <SEO
        title={outreachData.heading}
        description={outreachData.meta_page_description}
      />
      <SubpageHeading> {outreachData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {/* Info Blocks */}
        <div>
          {infoBlockArr.map((blockData, index) => (
            <InfoBlock
              heading={blockData.heading}
              description={blockData.description}
              image={blockData.image.childImageSharp.fluid}
              key={index}
              // Example key would be 1 (index of the data)
              id={blockData.id}
              // Flips the order for every second block
              reverseOrder={index % 2 === 0}
            />
          ))}
        </div>

        {/* Reviews */}
        <div className="row">
          <h2 className="p-3 outline-black-white-heading"> Reviews </h2>
        </div>

        <div className="row">
          {reviewsArr.map((reviewData, index) => (
            <ReviewCol className="col-md m-2 p-3" key={index}>
              <p>
                <b>
                  <i>"{reviewData.quote}"</i>
                </b>
              </p>
              <p>{reviewData.person}</p>
            </ReviewCol>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm className="my-5 py-5" />
      </div>
    </Layout>
  );
};

export default BikePage;
