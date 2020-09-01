import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

import temp_team_image from "../images/main_raceday_2.png";

const CenteredImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

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
            description
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
        <div className="row py-3 my-5">
          <CenteredImage src={temp_team_image} />
        </div>
        <div className="row py-3 my-5">
          <p>{teamData.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
