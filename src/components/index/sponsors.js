import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const SponsorHeading = styled.h2`
  background: black;
  color: white;
  align-text: centre;
`;

const Sponsors = ({ className }) => {
  const data = useStaticQuery(graphql`
    query SponsorsQuery {
      file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            sponsors {
              name
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sponsorArr = data.file.childMarkdownRemark.frontmatter.sponsors;

  return (
    <div className={className}>
      <SponsorHeading className="p-3 my-2"> Sponsors </SponsorHeading>
      <div className="row">
        {sponsorArr.map((sponsorObj, index) => (
          <div className="col" key={index}>
            <Img
              className="m-2"
              fluid={sponsorObj.image.childImageSharp.fluid}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
