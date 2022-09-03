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
          }
        }
      }
    }
  `);

  const competitionsData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO
        title="Competitions"
        description={competitionsData.meta_page_description}
      />
      <SubpageHeading> {competitionsData.heading} </SubpageHeading>

      {/* Main content */}
      <div className="container mb-5">
        {/* Current competitions */}
        <div className="my-5 py-5">
          <div className="row">
            <h2 className="p-3 outline-black-white-heading">
              {" "}
              Current Competitions{" "}
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompetitionsPage;
