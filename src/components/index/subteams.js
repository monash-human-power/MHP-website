import React from "react";
import styled from "styled-components";

import Button from "../button";

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
      window.location.href = `subteams#${encodeURI(name)}`;
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

const SUBTEAMS_PER_ROW = 3;

const SubTeams = ({ className, subteamsArray }) => {
  let numRows = Math.ceil(subteamsArray.length / SUBTEAMS_PER_ROW);
  return (
    <div className={className}>
      {/* Subteams */}
      <div className="row">
        <h2 className="p-3 outline-black-white-heading"> Subteams </h2>
      </div>

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
