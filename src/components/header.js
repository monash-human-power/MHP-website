import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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
      logoData: file(relativePath: { eq: "MHP_logo_green_transparent.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
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
    { title: "About", link: "/" },
    { title: "Team", link: "/team" },
    { title: "Bike", link: "/bike" },
    { title: "Subteams", link: "/subteams" },
    { title: "Outreach", link: "/outreach" },
    {
      title: "Join Us",
      link:
        data.recruitmentData.childMarkdownRemark.frontmatter.recruitment_link,
    },
  ];

  return (
    <header>
      <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark">
        {/* Button that allows for the menu toggler icon */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <CollapsingDiv className="collapse navbar-collapse" id="navbarContent">
          {/* MHP name */}
          <div style={{ width: 200, margin: "auto" }}>
            <ul className="navbar-nav pt-1">
              <NavLinkContainer
                className="nav-item"
                style={{ display: "flex" }}
              >
                {/* MHP logo */}
                <Link to="/">
                  <Img
                    className="align-top"
                    fixed={data.logoData.childImageSharp.fixed}
                  />
                </Link>
                <NavLink className="nav-link" to="/">
                  MHP
                </NavLink>
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
          <div style={{ width: 200, margin: "auto" }}>
            <Socials />
          </div>
        </CollapsingDiv>
      </Navbar>
    </header>
  );
};

export default Header;
