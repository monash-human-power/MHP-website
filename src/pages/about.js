import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";
import SubpageHeading from "../components/subpage_heading";

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
          }
        }
      }
    }
  `);

  const aboutData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Subteams" description={aboutData.meta_page_description} />
      <SubpageHeading> {aboutData.heading} </SubpageHeading>
      {/* Main content */}
      <div className="container mb-5">Hello world</div>
    </Layout>
  );
};

export default AboutPage;
