import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import SubpageHeading from "../components/subpage_heading";

const CompetitionsPage = () => {
  const data = useStaticQuery(graphql`
    query CompetitionsPageQuery {
      file(
        relativePath: { eq: "competitions.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
            meta_page_description
            blocks {
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
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

  const competitionsData = data.file.childMarkdownRemark.frontmatter;
  const infoBlockArr = competitionsData.blocks;

  return (
    <Layout>
      <SEO
        title="Competitions"
        description={competitionsData.meta_page_description}
      />
      <SubpageHeading> {competitionsData.heading} </SubpageHeading>

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
              image={blockData.image.childImageSharp.gatsbyImageData}
              key={index}
              // Example key would be 1 (index of the data)
              id={blockData.id}
              // Flips the order for every second block
              reverseOrder={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CompetitionsPage;
