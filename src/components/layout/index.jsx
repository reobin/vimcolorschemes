import React from "react";
import PropTypes from "prop-types";

import { useNavigationEffect } from "src/hooks/useNavigationEffect";

import Header from "src/components/header";
import Footer from "src/components/footer";

import "./index.scss";

const Layout = ({ children, isHome }) => {
  useNavigationEffect();

  return (
    <>
      <Header isHome={isHome} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
};

export default Layout;
