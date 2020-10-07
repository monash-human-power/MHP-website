import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import Img from "gatsby-image";
import Button from "../button";
import propTypes from "prop-types";

import x from "../../images/lightning_bolt.png";

const SubTeamHeading = styled.h2`
  background: black;
  color: white;
  align-text: centre;
`;

const SubTeamBox = styled.div`
  border: 10px black solid;
`;

const SubTeamSquare = ({ name, description, button_text, button_href }) => (
  <SubTeamBox className="col-md m-1 p-3">
    <div className="row">
      <div className="col">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>

    <div class="row">
      <div className="col">
        {/* Button is hidable if nothing is added aka "" */}
        {button_text !== "" && (
          <Button href={button_href}>{button_text}</Button>
        )}
      </div>

      <div className="col text-right">
        {/* <img src={x} style={{ height: 30, width: 30 }}></img> */}
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
      <div className="row justify-content-center">
        <SubTeamHeading className="p-3 my-2">× SubTeams ×</SubTeamHeading>
      </div>

      {/* TODO: This is bad, really need to change :( */}
      <div className="row">{subteamsArray.slice(0, 3).map(SubTeamSquare)}</div>
      <div className="row">{subteamsArray.slice(3, 6).map(SubTeamSquare)}</div>

      <div className="row justify-content-center">
        <div className="col-md-3 col-sm my-3">
          <Button href="/subteams">Meet the subteams</Button>
        </div>
      </div>
    </div>
  );
};

export default SubTeams;
