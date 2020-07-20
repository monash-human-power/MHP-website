// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header


import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "MHP_logo_green_transparent.png" }) {
        childImageSharp {
          fixed(height: 30, width: 30) {
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
      <nav class='navbar fixed-top navbar-expand-lg navbar-dark MHP-bg MHP-header'>
        <a className='navbar-brand logo_text' href='#'>
          <Img
            className='d-inline-block align-top logo_image'
            fixed={data.file.childImageSharp.fixed}
          />
          MHP
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarText'>

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
          {/* <SocialSidebar /> */}

        </div>
      </nav>
    </header >
  )
}

export default Header
