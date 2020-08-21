import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { SECTIONS, LAYOUTS } from "src/constants";

import { useNavigation } from "src/hooks/useNavigation";

import ExternalLink from "src/components/externalLink";
import Layout from "src/components/layout";
import SEO from "src/components/seo";

import "./index.scss";

const AboutPage = ({
  data: {
    site: {
      siteMetadata: { title, platform },
    },
  },
}) => {
  useNavigation();
  return (
    <Layout>
      <SEO title={`About ${platform}colorschemes`} path="/about" />
      <div className="about">
        <h1 className="title" id="about">
          <a
            href="#about"
            data-section={`${SECTIONS.ABOUT_LINK}-1`}
            data-layout={LAYOUTS.BLOCK}
          >
            About {platform}
            {title}
          </a>
        </h1>
        <p>
          <strong>
            {platform}
            {title}{" "}
          </strong>{" "}
          is a <strong>fun</strong> and <strong>fast</strong> gallery for{" "}
          {platform} color scheme repositories on GitHub.
        </p>
        <p>
          It solves an old problem of mine, which is to find the perfect{" "}
          {platform} color scheme. <strong>Syntax color</strong> in a coding
          environment is <strong>a big part</strong> of what makes it{" "}
          <strong>yours and yours only</strong>.
        </p>
        <p>
          GitHub holds an impressive amount of {platform} color schemes. It is
          not easy to navigate through them, though. Checking out a couple to
          find a nice one can take a while.
        </p>
        <p>
          This is where{" "}
          <strong>
            {platform}
            {title}
          </strong>{" "}
          comes in. It is <strong>minimal</strong>,{" "}
          <strong>focused on content</strong>, and{" "}
          <strong>it feels awesome</strong> to navigate through.
        </p>
        <h2 className="subtitle" id="key-features">
          <a
            href="#key-features"
            data-section={`${SECTIONS.ABOUT_LINK}-3`}
            data-layout={LAYOUTS.BLOCK}
          >
            Key features{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </a>
        </h2>
        <ul>
          <li>
            <strong>Daily updated</strong> list of thousands of {platform} color
            scheme repositories
          </li>
          <li>
            <strong>Awesome vim key (or arrows) bindings</strong> to navigate
            quickly through the whole site
          </li>
        </ul>
        <h2 className="subtitle" id="get-involved">
          <a
            href="#get-involved"
            data-section={`${SECTIONS.ABOUT_LINK}-4`}
            data-layout={LAYOUTS.BLOCK}
          >
            Get Involved
          </a>
        </h2>
        <p>
          <strong>
            {platform}
            {title}
          </strong>{" "}
          is aimed to be a collaborative project, and you are invited to help.
          All types of involvement are welcome!
        </p>
        <p>
          Developers, check out
          <ExternalLink
            to="https://github.com/reobin/vimcolorschemes/wiki/Development-guide"
            data-section={`${SECTIONS.ABOUT_LINK}-5`}
            data-layout={LAYOUTS.BLOCK}
            noIcon
            className="inline-link"
          >
            {" "}
            the development guide{" "}
          </ExternalLink>
          to start writing code.
        </p>
        <h2 className="subtitle" id="issues">
          <a
            href="#issues"
            data-section={`${SECTIONS.ABOUT_LINK}-6`}
            data-layout={LAYOUTS.BLOCK}
          >
            Issues
          </a>
        </h2>
        <p>
          Having issues with this website? Or do you have a game changing
          feature idea?
        </p>
        <p>
          <ExternalLink
            to="https://github.com/reobin/vimcolorschemes/issues"
            data-section={`${SECTIONS.ABOUT_LINK}-7`}
            data-layout={LAYOUTS.BLOCK}
            noIcon
            className="inline-link"
          >
            Bugs and feature requests{" "}
          </ExternalLink>
          are welcome. Make sure to follow the issue template before posting.
        </p>
        <h2 className="subtitle" id="credits">
          <a
            href="#credits"
            data-section={`${SECTIONS.ABOUT_LINK}-8`}
            data-layout={LAYOUTS.BLOCK}
          >
            Credits
          </a>
        </h2>
        <p>
          Credit goes to all the creators of vim color schemes around GitHub{" "}
          <span role="img" aria-label="celebration">
            🎉
          </span>
        </p>
      </div>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        platform: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        platform
      }
    }
  }
`;

export default AboutPage;
