import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TeamPage_InfoBlock from "../components/teampage_infoblock";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

import temp_team_image from "../images/main_raceday_2.png";

const CenteredImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const InfoHeading = styled.h2`
  &::before {
    content: "×";
    color: var(--MHP-purple);
    padding-right: 10px;
    margin-top = 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flexdirection: column;
  flexgrow: 0;
  flexbasis: auto;
  flexshrink: 1;
  flex-wrap: wrap;
  alignitems: stretch;
  margin: 10px 10px 10px 10px;
  padding: 0;
  width: auto;
  height: auto;
  maxwidth: none;
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
            subteam {
              subteamName
              teamMembers {
                photo {
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                name
                degree
                position
                linkedIn
              }
            }
          }
        }
      }
    }
  `);

  const teamData = data.file.childMarkdownRemark.frontmatter;
  const teamElectricalArr = teamData.subteam[0].teamMembers;
  const teamAeroArr = teamData.subteam[1].teamMembers;
  const teamArr = teamData.subteam;

  return (
    <Layout>
      <SEO title="Team" />
      <SubpageHeading> {teamData.heading} </SubpageHeading>

      {/* Main image */}
      <div className="container mb-5">
        <div className="row py-3 my-5">
          <CenteredImage src={temp_team_image} />
        </div>
        <div className="row py-3 my-5">
          <p>{teamData.description}</p>
        </div>
      </div>

      {/* Main content */}
      {/* ELectrical team Block */}
      <div className="container mb-5">
        <InfoHeading> {teamData.subteam[0].subteamName} </InfoHeading>
        <Wrapper>
          {teamElectricalArr.map((blockData, index) => (
            <TeamPage_InfoBlock
              name={blockData.name}
              degree={blockData.degree}
              position={blockData.position}
              photo={blockData.photo.childImageSharp.fluid}
              linkedIn={blockData.linkedIn}
              key={index}
              // Example key would be 1 (index of the data)
              id={index}
            />
          ))}
        </Wrapper>
      </div>

      {/* Aero team Block */}
      <div className="container mb-5">
        <InfoHeading> {teamData.subteam[1].subteamName} </InfoHeading>
        <Wrapper>
          {teamAeroArr.map((blockData, index) => (
            <TeamPage_InfoBlock
              name={blockData.name}
              degree={blockData.degree}
              position={blockData.position}
              photo={blockData.photo.childImageSharp.fluid}
              linkedIn={blockData.linkedIn}
              key={index}
              // Example key would be 1 (index of the data)
              id={index}
            />
          ))}
        </Wrapper>
      </div>
    </Layout>
  );
};

export default TeamPage;
