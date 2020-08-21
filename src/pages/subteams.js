import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

const SubTeamsPage = () => {
  const data = useStaticQuery(graphql`
    query SubTeamsPageQuery {
      file(
        relativePath: { eq: "subteams.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            subteams {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              description
              button_text
              button_href
            }
          }
        }
      }
    }
  `);

  const indexData = data.file.childMarkdownRemark.frontmatter;
  const subTeamData = indexData.subteams;

  return (
    <Layout>
      <SEO title="Home" />
      <SubpageHeading> subteams </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {/* Info Blocks */}
        <div>
          {subTeamData.map((blockData, index) => (
            <InfoBlock
              heading={blockData.name}
              description={blockData.description}
              buttonText={blockData.button_text}
              href={blockData.button_href}
              image={blockData.image.childImageSharp.fluid}
              key={index}
              // Example key would be 1 (index of the data)
              id={2}
              // Flips the order for every second block
              reverseOrder={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SubTeamsPage;
