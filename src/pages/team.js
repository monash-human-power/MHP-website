import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamPageQuery {
      file(
        relativePath: { eq: "team.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            heading
          }
        }
      }
    }
  `);

  const teamData = data.file.childMarkdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title="Team" />
      <SubpageHeading> {teamData.heading} </SubpageHeading>
      <div className="container mb-5">
        <p>lol no team</p>
      </div>
    </Layout>
  );
};

export default TeamPage;
