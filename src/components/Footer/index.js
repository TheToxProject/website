import React from "react";
import PropTypes from "prop-types";
import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaForumbee // No Spectrum icon :(
} from "react-icons/lib/fa";

import styles from "./styles";
import Theme from "../../config/theme";

const START_YEAR = 2013;

export class Footer extends React.Component {
  render() {
    const { t /*, showSocial, editUrl*/ } = this.props;
    const currentYear = new Date().getUTCFullYear();

    return (
      <div style={styles.footerContainer}>
        <p style={styles.copyright}>
          Copyright &copy; {START_YEAR} - {currentYear} The Tox Project.
        </p>
        <p style={styles.credits}>{t("footer:credits")}</p>
        <div style={styles.social}>
          <a
            href="https://github.com/TokTok/c-toxcore"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.github")}
            style={styles.socialLink}
          >
            <FaGithub color={Theme.Colors.BACKGROUND} size={24} />
          </a>
          <a
            href="https://www.facebook.com/toxproject"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.facebook")}
            style={styles.socialLink}
          >
            <FaFacebook color={Theme.Colors.BACKGROUND} size={24} />
          </a>
          <a
            href="https://twitter.com/projecttox"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.twitter")}
            style={styles.socialLink}
          >
            <FaTwitter color={Theme.Colors.BACKGROUND} size={24} />
          </a>
          <a
            href="https://spectrum.chat/tox"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.spectrum")}
            style={styles.socialLink}
          >
            <FaForumbee color={Theme.Colors.BACKGROUND} size={24} />
          </a>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  showSocial: PropTypes.bool,
  editUrl: PropTypes.string
};

Footer.defaultProps = {
  showSocial: true,
  editUrl: ""
};

export default Footer;
