import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";

const Centered = styled.h5`
  text-align: center;
  margin-top: 10px;
`;

const Centered2 = styled.h6`
  text-align: center;
  margin-top: 10px;
`;

const Centered3 = styled.h6`
text-align: center;
margin-bottom: 30px
flexGrow: 0;
flexBasis: auto;
flexShrink: 1;
flex-wrap: wrap;
flexDirection: row;
color: var(--MHP-purple);
`;

const colour = {
  color: "#4831d4",
};

const TeamPage_InfoBlock = ({
  name,
  degree,
  position,
  photo,
  linkedIn,
  id,
}) => (
  <div className="col-sm-6 col-md-3" id={id}>
    {/* Position heading component */}
    <Centered> {position} </Centered>

    {/* Image component */}
    <Img fluid={photo} />

    {/* Name, degree and linkedIn heading */}
    <Centered> {name} </Centered>
    <Centered2>{degree}</Centered2>
    <Centered3>
      {" "}
      <a style={colour} href={linkedIn}>
        LinkedIn
      </a>
    </Centered3>
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
  linkedIn: "/",
};

export default TeamPage_InfoBlock;
