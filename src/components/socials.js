import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Link from "./link";

// Import social logos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const MhpSocialContainer = styled.div`
  display: block;
  text-align: center;
`;

const SocialLink = styled(Link)`
  padding: 0px 10px 0px 10px;
  color: var(--MHP-white);

  transition: 0.1s;

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
            tiktok
            youtube
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
      <SocialLink to={social_link.facebook} title="Facebook">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faFacebook}
        />
      </SocialLink>

      <SocialLink to={social_link.instagram} title="Instagram">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faInstagram}
        />
      </SocialLink>

      <SocialLink to={social_link.linkedIn} title="LinkedIn">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faLinkedin}
        />
      </SocialLink>

      <SocialLink to={social_link.github} title="GitHub">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faGithub}
        />
      </SocialLink>

      <SocialLink to={social_link.tiktok} title="TikTok">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faTiktok}
        />
      </SocialLink>

      <SocialLink to={social_link.youtube} title="YouTube">
        <FontAwesomeIcon
          style={{ height: iconSize, width: iconSize }}
          icon={faYoutube}
        />
      </SocialLink>
    </MhpSocialContainer>
  );
};

export default Socials;
