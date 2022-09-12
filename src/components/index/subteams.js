import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Button from "../button";
import { CenteredSection, SectionHeading } from "../content";

const SubTeamBox = styled.div`
  // Clickable cursor look
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
  color: black;
  text-decoration: none;
  font-size: 1.4rem;
`;

const SubTeamBoxContent = styled.p`
  color: black;
  text-decoration: none;
`;

const SubTeamSquare = (
  { name, description, button_text, button_href, id },
  index
) => (
  <SubTeamBox className="col-md m-2 p-3" key={index}>
    <AnchorLink to={`/subteams#${id}`}>
      <div className="row">
        <div className="col">
          <SubTeamBoxHeading>{name}</SubTeamBoxHeading>
          <SubTeamBoxContent>{description}</SubTeamBoxContent>
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
    </AnchorLink>
  </SubTeamBox>
);

const SUBTEAMS_PER_ROW = 3;

const SubTeams = ({ className, subteamsArray }) => {
  let numRows = Math.ceil(subteamsArray.length / SUBTEAMS_PER_ROW);
  return (
    <div className={className}>
      {/* Subteams */}
      <CenteredSection className="row p-3">
        <SectionHeading> Subteams </SectionHeading>
      </CenteredSection>

      {/* Dynamically generate subteam cells */}
      {[...Array(numRows).keys()].map(row => {
        return (
          <div className="row">
            {subteamsArray
              .slice(row * SUBTEAMS_PER_ROW, (row + 1) * SUBTEAMS_PER_ROW)
              .map(SubTeamSquare)}
          </div>
        );
      })}
    </div>
  );
};

export default SubTeams;
