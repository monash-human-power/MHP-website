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

// A list of team roles and their sort priority. Lower values mean HIGHER priority as they will be placed earlier in the array.
const teamPositionSorting = {
  "Team Member": 1, // ordinary team members, no special role
  "Assistant Team Lead": -1,
  "Team Lead": -2,
  "Chief Engineer": -3,
  "Team Manager": -4,
  "Chief Operating Officer": -5,
  "Chief Technical Officer": -6,
  "Chief Executive Officer": -7,
};

/**
 * Compare team member by position and then by name.
 * @param {*} member1
 * @param {*} member2
 * @returns
 */
function compareTeamMembers(member1, member2) {
  let m1Position = teamPositionSorting[member1.position] ?? 0;
  let m2Position = teamPositionSorting[member2.position] ?? 0;
  if (m1Position > m2Position) {
    return 1;
  }
  if (m1Position < m2Position) {
    return -1;
  }

  // if position is not in sorting list, sort alphabetically
  let positionStringCompare = member1.position.localeCompare(
    member2.position,
    "en"
  );
  if (positionStringCompare > 0) {
    return 1;
  }
  if (positionStringCompare < 0) {
    return -1;
  }

  // Within the same position, sort by name
  return member1.name.localeCompare(member2.name, "en");
}

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
                    gatsbyImageData(
                      width: 500
                      height: 500
                      quality: 100
                      layout: CONSTRAINED
                    )
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

  debugger;

  return (
    <Layout>
      <SEO title="Team" description={teamData.meta_page_description} />
      <SubpageHeading> {teamData.heading} </SubpageHeading>

      {/* TODO: Remove this if we never use it */}
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
              {blockData.teamMembers
                .sort(compareTeamMembers)
                .map((memberInfo, index_inner) => (
                  <InfoBlock
                    name={memberInfo.name}
                    degree={memberInfo.degree}
                    position={memberInfo.position}
                    photo={memberInfo.photo.childImageSharp.gatsbyImageData}
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
