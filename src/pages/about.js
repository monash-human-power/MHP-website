import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import SubpageHeading from "../components/subpage_heading";
import SubteamsGrid from "../components/index/subteams_grid";
import TextGrid from "../components/text_grid";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      file(
        relativePath: { eq: "about.md" }
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
            subteams {
              name
              description
              button_text
              button_href
              id
            }
            our_values {
              heading
              body
            }
            image {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

  const aboutData = data.file.childMarkdownRemark.frontmatter;
  const infoBlockArr = aboutData.blocks;
  const subteamsArray = aboutData.subteams;
  const valuesArray = aboutData.our_values;

  return (
    <Layout>
      <SEO title="About" description={aboutData.meta_page_description} />
      <SubpageHeading> {aboutData.heading} </SubpageHeading>
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

        {/* Our values section */}
        <TextGrid
          className="mb-5"
          gridHeading="Our Values"
          cellArray={valuesArray}
        />

        {/* Sub-Teams Section */}
        <SubteamsGrid className="mb-5" subteamsArray={subteamsArray} />
      </div>
    </Layout>
  );
};

export default AboutPage;
