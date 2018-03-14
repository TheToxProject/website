import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

export class Footer extends React.Component {
  render() {
    const { copyright, tagline /*, showSocial, editUrl*/ } = this.props;

    return (
      <div style={styles.footerContainer}>
        <p>
          {copyright.replace("#copy", "&copy;")} &mdash; {tagline}
        </p>
      </div>
    );
  }
}

Footer.propTypes = {
  copyright: PropTypes.string,
  tagline: PropTypes.string,
  showSocial: PropTypes.bool,
  editUrl: PropTypes.string
};

Footer.defaultProps = {
  copyright: "",
  tagline: "",
  showSocial: true,
  editUrl: ""
};

export default Footer;
