import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import InfoBlock from "../components/team/info_block";

import SubpageHeading from "../components/subpage_heading";
import styled from "styled-components";

/* INFO: UNCOMMENT IF MAIN TEAM IMAGE IS USED
const CenteredImage = styled(Img)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  width: 100%;
`;
*/

const InfoHeading = styled.h2`
  &::before {
    content: "◼";
    color: var(--MHP-purple-2);
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
            meta_page_description
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
  const teamArr = teamData.subteam;

  return (
    <Layout>
      <SEO title="Team" description={teamData.meta_page_description} />
      <SubpageHeading> {teamData.heading} </SubpageHeading>

      {/* INFO: UNCOMMENT IF MAIN TEAM IMAGE IS USED 

            mainPhoto {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            } 
        <div className="container mb-5">
          <div className="row py-3 my-3">
            <CenteredImage fluid ={teamData.mainPhoto.childImageSharp.fluid} />
          </div>
          <div className="row py-3 my-2">
            <p>{teamData.description}</p>
          </div>
        </div> 
      */}

      {/* Entire Team Images Block */}
      <div className="container my-5">
        {teamArr.map((blockData, index_outer) => (
          <div key={index_outer}>
            <InfoHeading> {blockData.subteamName} </InfoHeading>
            <Wrapper>
              {blockData.teamMembers.map((memberInfo, index_inner) => (
                <InfoBlock
                  name={memberInfo.name}
                  degree={memberInfo.degree}
                  position={memberInfo.position}
                  photo={memberInfo.photo.childImageSharp.fluid}
                  linkedIn={memberInfo.linkedIn}
                  key={index_inner}
                  // Example key would be 1 (index_inner of the data)
                  id={index_inner}
                />
              ))}
            </Wrapper>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TeamPage;
