import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Button from "../button";

const SubTeamBox = styled.div`
  // Click cursor look
  cursor: pointer;

  border: 1px solid black;

  /* Dispose of shadow */
  transition: 0.1s;

  &:hover {
    /* Show shadow */
    transition: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const SubTeamBoxHeading = styled.h2`
  font-size: 1.4rem;
`;

const SubTeamSquare = (
  { name, description, button_text, button_href },
  index
) => (
  <SubTeamBox
    className="col-md m-2 p-3"
    key={index}
    onClick={() => {
      window.location.href = `subteams/#${encodeURI(name)}`;
    }}
  >
    <div className="row">
      <div className="col">
        <SubTeamBoxHeading>{name}</SubTeamBoxHeading>
        <p>{description}</p>
      </div>
    </div>

    <div className="row">
      <div className="col">
        {/* Button is hidable if nothing is added aka "" */}
        {button_text !== "" && (
          <Button href={button_href}>{button_text}</Button>
        )}
      </div>
    </div>
  </SubTeamBox>
);

const SubTeams = ({ className }) => {
  const data = useStaticQuery(graphql`
    query SubteamsQuery {
      file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            subteams {
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

  const subteamsArray = data.file.childMarkdownRemark.frontmatter.subteams;

  return (
    <div className={className}>
      <h2>Subteams</h2>

      {/* TODO: This is bad, really need to change :( */}
      <div className="row">{subteamsArray.slice(0, 3).map(SubTeamSquare)}</div>
      <div className="row">{subteamsArray.slice(3, 6).map(SubTeamSquare)}</div>
    </div>
  );
};

export default SubTeams;
