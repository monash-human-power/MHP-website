import React from "react";
import Link from "../link";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { SectionHeading } from "../content";

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
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              link
            }
          }
        }
      }
    }
  `);

  const sponsorArr = data.file.childMarkdownRemark.frontmatter.sponsors;

  return (
    <div className={className}>
      {/* Sponsors */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="row"
      >
        <SectionHeading>Sponsors</SectionHeading>
      </div>

      <div className="row justify-content-md-center align-items-center">
        {sponsorArr.map((sponsorObj, index) => (
          <div className="col-6 col-md-3" key={index}>
            <Link to={sponsorObj.link}>
              <GatsbyImage
                image={sponsorObj.image.childImageSharp.gatsbyImageData}
                // TODO: Find out why this works
                className="m-4 mx-auto"
                alt={`Logo of ${sponsorObj.name}`}
                title={sponsorObj.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
