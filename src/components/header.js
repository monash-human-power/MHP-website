import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Link from "./link";
import Socials from "./socials";

const NavLinkContainer = styled.li`
  /* Items are centered in drop down */
  align-self: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const NavLink = styled(Link)`
  /* Nav links should be white and then green when hovered over */
  color: var(--MHP-white) !important;
  &:hover {
    color: var(--MHP-green) !important;
  }
`;

const LogoNavLink = styled(Link)`
  transition: 0.1s;
  &:hover {
    transition: 0.3s;
    filter: brightness(75%);
  }
`;

const Navbar = styled.nav`
  background-color: var(--MHP-black);
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const CollapsingDiv = styled.div`
  justify-content: space-between;
`;

function navItem(text, anchor = "#", key) {
  return (
    <NavLinkContainer className="nav-item" key={key}>
      <NavLink className="nav-link" to={anchor}>
        {text}
      </NavLink>
    </NavLinkContainer>
  );
}

const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      logoData: file(relativePath: { eq: "mhp-logo-white.png" }) {
        childImageSharp {
          gatsbyImageData(height: 30, layout: FIXED)
        }
      }
      recruitmentData: file(
        relativePath: { eq: "index.md" }
        sourceInstanceName: { eq: "markdown" }
      ) {
        childMarkdownRemark {
          frontmatter {
            recruitment_link
          }
        }
      }
    }
  `);

  const pageLinks = [
    { title: "About", link: "/about" },
    { title: "Team", link: "/team" },
    { title: "Bike", link: "/bike" },
    { title: "Subteams", link: "/subteams" },
    { title: "Competitions", link: "/competitions" },
    { title: "Outreach", link: "/outreach" },
    { title: "Blog", link: "/blog" },
    {
      title: "Join Us",
      link: "/joinUs",
    },
  ];

  return (
    <header>
      <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark">
        {/* Button that allows for the menu toggler icon */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <CollapsingDiv className="collapse navbar-collapse" id="navbarContent">
          {/* Home page link container */}
          <div style={{ width: 200, margin: "auto" }}>
            <ul className="navbar-nav justify-content-center">
              <NavLinkContainer
                className="nav-item"
                style={{ display: "flex" }}
              >
                {/* MHP logo */}
                <LogoNavLink to="/">
                  <GatsbyImage
                    image={data.logoData.childImageSharp.gatsbyImageData}
                    alt="MHP logo"
                  />
                </LogoNavLink>
              </NavLinkContainer>
            </ul>
          </div>

          {/* Page Links */}
          <div>
            <ul className="navbar-nav">
              {pageLinks.map((item, index) =>
                navItem(item.title, item.link, index)
              )}
            </ul>
          </div>

          {/* Social Media Icons */}
          {/* Recommended width: 50 per social media */}
          <div style={{ width: 250, margin: "auto" }}>
            <Socials />
          </div>
        </CollapsingDiv>
      </Navbar>
    </header>
  );
};

export default Header;
