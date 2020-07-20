import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Socials from './socials'

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
      <li className='nav-item MHP-nav-link'>
        <a className='nav-link' href={anchor}>
          {text}
        </a>
      </li>
    )
  }

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark MHP-bg'>

        {/* MHP logo and name */}
        <div className='MHP-nav-logo'>
          <a className='navbar-brand' href='/' >
            <Img
              className='d-inline-block align-top'
              fixed={data.file.childImageSharp.fixed}
            />
          MHP
          </a>
        </div>

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
            {navItem('Home', '#')}
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
