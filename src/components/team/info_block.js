import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import Link from "../link";

const Centered = styled.h5`
  text-align: center;
  margin-top: 10px;
`;

const Centered2 = styled.h6`
  text-align: center;
  margin-top: 10px;
`;

const Centered3 = styled.h6`
  color: var(--MHP-purple);
  text-align: center;
  margin-bottom: 30px;
`;

const TeamPage_InfoBlock = ({
  name,
  degree,
  position,
  photo,
  linkedIn,
  id,
}) => (
  <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 m-3" id={id}>
    {/* Position heading component */}
    <Centered> {position} </Centered>

    {/* Image component */}
    <GatsbyImage image={photo} alt={`Photo of ${name}`} />

    {/* Name, degree and linkedIn heading */}
    <Centered> {name} </Centered>
    <Centered2>{degree}</Centered2>

    {/* LinkedIn, will not display if there isn't one */}
    {linkedIn !== "" && linkedIn !== null && (
      <Link to={linkedIn}>
        {" "}
        <Centered3> LinkedIn </Centered3>{" "}
      </Link>
    )}
  </div>
);

TeamPage_InfoBlock.propTypes = {
  name: propTypes.string,
  degree: propTypes.string,
  position: propTypes.string,
  linkedIn: propTypes.string,
};

TeamPage_InfoBlock.defaultProps = {
  name: "",
  degree: "",
  position: "",
  linkedIn: "/team",
};

export default TeamPage_InfoBlock;
