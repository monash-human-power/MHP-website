import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: white;
  background: var(--MHP-purple);
`;

const SubpageHeading = ({ children }) => (
  // Add max padding on top (pt-5) and a little padding on the bottom (pb-1)
  // No padding on the bottom
  <Heading className="pt-5 pb-1 mb-0">{children}</Heading>
);

SubpageHeading.propTypes = {
  children: propTypes.node.isRequired,
};

SubpageHeading.defaultProps = {
  children: "",
};

export default SubpageHeading;
