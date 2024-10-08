import React from "react";
import { Link as GatsbyLink } from "gatsby";

/**
 * Checks if a link is internal (i.e. points to another page or section on MHP website).
 * @param url Link to check
 * @returns {boolean} `true` if the link is internal
 */
export function isInternalLink(url) {
  return /^\/(?!\/)/.test(url);
}

// USE THIS INSTEAD OF GATSBY LINK!!!

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = isInternalLink(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} target="_blank" rel="noreferrer" {...other}>
      {children}
    </a>
  );
};

export default Link;
