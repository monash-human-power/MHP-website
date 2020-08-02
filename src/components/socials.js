import React from "react"
import styled from "styled-components"

import Link from "./link"

// Import social logos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const MhpSocialContainer = styled.div`
  display: block;
  text-align: center;
`

const SocialLink = styled(Link)`
  padding: 0px 10px 0px 10px;
  font-size: 28px;
  color: var(--MHP-white);

  &:hover {
    color: var(--MHP-green);
    transition: 0.3s;
  }
`

const Socials = () => {
  return (
    <MhpSocialContainer>
      <SocialLink to="https://www.facebook.com/MonashHPT/">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SocialLink>

      <SocialLink to="https://www.instagram.com/monashhpt/">
        <FontAwesomeIcon icon={faInstagramSquare} />
      </SocialLink>

      <SocialLink to="https://www.linkedin.com/company/monashhpt/">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
    </MhpSocialContainer>
  )
}

export default Socials
