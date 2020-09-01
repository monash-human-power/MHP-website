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
} from "@fortawesome/free-brands-svg-icons";

const MhpSocialContainer = styled.div`
  display: block;
  text-align: center;
`;

const SocialLink = styled(Link)`
  padding: 0px 10px 0px 10px;
  font-size: 28px;
  height: 28px;
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
          }
        }
      }
    }
  `);

  const social_link = data.file.childMarkdownRemark.frontmatter;

  return (
    <MhpSocialContainer>
      <SocialLink to={social_link.facebook}>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SocialLink>

      <SocialLink to={social_link.instagram}>
        <FontAwesomeIcon icon={faInstagramSquare} />
      </SocialLink>

      <SocialLink to={social_link.linkedIn}>
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
    </MhpSocialContainer>
  );
};

export default Socials;
