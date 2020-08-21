import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamPageQueryss {
      file(
        relativePath: { eq: "bike.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            bikes {
              name
              version
              description
              start_year
              end_year
              top_speed_km
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

  const bikeData = data.file.childMarkdownRemark.frontmatter;
  const bikeArr = bikeData.bikes;

  return (
    <Layout>
      <SEO title="Team" />
      <SubpageHeading> The Team </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {/* Info Blocks */}
        <div>
          {bikeArr.map((blockData, index) => (
            <InfoBlock
              heading={blockData.name}
              description={blockData.description}
              image={blockData.image.childImageSharp.fluid}
              key={index}
              // Example key would be 1 (index of the data)
              id={index}
              // Flips the order for every second block
              reverseOrder={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
