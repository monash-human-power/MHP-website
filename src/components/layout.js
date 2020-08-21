import React from "react";
import propTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";

const MinHeightMain = styled.main`
  min-height: 95vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MinHeightMain style={{ minHeight: "95vh" }}>{children}</MinHeightMain>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
