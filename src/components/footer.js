import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Link from "./link";
import Socials from "./socials";

const MhpFooter = styled.footer`
  text-align: center;
  background-color: var(--MHP-black);
  color: var(--MHP-white);
`;

const FooterLink = styled(Link)`
  color: var(--MHP-green);
`;

const FooterHeading = styled.h4`
  text-align: left;
  text-transform: uppercase;
`;

const FooterParagraph = styled.p`
  text-align: left;
`;

const MhpAddress = styled.address`
  text-align: left;
`;

const TinyFooterParagraph = styled.p`
  font-size: 0.8rem;
`;

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const recruitment_data = useStaticQuery(graphql`
    query RecruitmentInfoQuery {
      file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            recruitment_info
          }
        }
      }
    }
  `);

  return (
    <MhpFooter className="pt-3">
      <div className="container">
        <div className="row">
          {/* Sponsor section */}
          <div className="col-md">
            <FooterHeading>Sponsor Us</FooterHeading>
            <FooterParagraph>
              Get in touch with us today at
              <FooterLink to="mailto: monashhpt@gmail.com">
                {" "}
                monashhpt@gmail.com
              </FooterLink>
            </FooterParagraph>
          </div>

          {/* Address section */}
          <div className="col-md">
            <FooterHeading>Say Hello</FooterHeading>
            <MhpAddress>
              Monash Makerspace <br />
              23 College Walk <br />
              Monash University VIC 3800
            </MhpAddress>
          </div>

          {/* Join section */}
          <div className="col-md">
            <FooterHeading>Join Us</FooterHeading>
            <FooterParagraph>
              Let's beat the world record together!
              <br />
              <FooterLink
                to={
                  recruitment_data.file.childMarkdownRemark.frontmatter
                    .recruitment_info
                }
              >
                Recruitment page
              </FooterLink>
            </FooterParagraph>
          </div>

          {/* Social icons */}
          <div className="col-md">
            <Socials />
          </div>
        </div>

        {/* Copyright and Indigenous acknowledgement */}
        <div className="row">
          {/* Col is xl as it should always collapse */}
          <div className="col-xl">
            <TinyFooterParagraph>
              {" "}
              &#169; {CURRENT_YEAR}, Monash Human Power{" "}
            </TinyFooterParagraph>
            <TinyFooterParagraph>
              We wish to acknowledge the Wurundjeri People of the Kulin Nations,
              on whose land we build our bikes and pay our respects to their
              Elders, past and present.
            </TinyFooterParagraph>
          </div>
        </div>
      </div>
    </MhpFooter>
  );
};

export default Footer;
