import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Link from "./link";

// Import social logos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const MhpSocialContainer = styled.div`
  display: block;
  text-align: center;
`;

const SocialLink = styled(Link)`
  padding: 0px 10px 0px 10px;
  color: var(--MHP-white);

  &:hover {
    color: var(--MHP-green);
    transition: 0.3s;
  }
`;

const Socials = () => {
  const data = useStaticQuery(graphql`
    query socialQuery {
      file(
        relativePath: { eq: "socials.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook
            instagram
            linkedIn
            github
          }
        }
      }
    }
  `);

  const social_link = data.file.childMarkdownRemark.frontmatter;
  const iconSize = 28; //px

  // Inline style for FontAwesomeIcon ensures that the styles gets loaded immediately with the HTML (no huge icons)
  return (
    <MhpSocialContainer>
      <SocialLink to={social_link.facebook}>
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faFacebookSquare}
        />
      </SocialLink>

      <SocialLink to={social_link.instagram}>
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faInstagramSquare}
        />
      </SocialLink>

      <SocialLink to={social_link.linkedIn}>
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faLinkedin}
        />
      </SocialLink>

      <SocialLink to={social_link.github}>
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faGithubSquare}
        />
      </SocialLink>
    </MhpSocialContainer>
  );
};

export default Socials;
