import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Link from "./link"
import Socials from './socials'

const NavLinkContainer = styled.li`
  /* Items are centered in drop down */
  text-transform: uppercase;
  align-self: center;
`

const NavLink = styled(Link)`
/* Nav links should be white and then green when hovered over */
color: var(--MHP-white) !important; 
&:hover {
  color: var(--MHP-green) !important; 
}
`

const MhpLogoDiv = styled.div`
/* When hovering over the logo text change text colour to the HMP green */
& a:hover {
  color: var(--MHP-green) !important; 
}
`


const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "MHP_logo_green_transparent.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  function navItem(text, anchor = '#') {
    return (
      <NavLinkContainer className='nav-item'>
        <NavLink className='nav-link' to={anchor}>
          {text}
        </NavLink>
      </NavLinkContainer>
    )
  }

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark MHP-bg'>

        {/* MHP logo and name */}
        <MhpLogoDiv>
          <a className='navbar-brand' href='/' >
            <Img
              className='d-inline-block align-top'
              fixed={data.file.childImageSharp.fixed}
            />
          MHP
          </a>
        </MhpLogoDiv>

        {/* Button that allows for the menu toggler icon */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarContent'>

          {/* Page Links */}
          <ul className='navbar-nav ml-auto'>
            {navItem('About', '#about')}
            {navItem('Bike', '#bike')}
            {navItem('The Race', '#race')}
            {navItem('Our Team', '#team')}
            {navItem('Community', '#community')}
            {navItem('Contact', '#contact')}
          </ul>


          {/* Social Media Icons */}
          <Socials />

        </div>
      </nav>
    </header >
  )
}

export default Header
