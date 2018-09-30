import React from "react";
import PropTypes from "prop-types";

import FaGithub from "react-icons/lib/fa/github";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaForumbee from "react-icons/lib/fa/forumbee";
import FaReddit from "react-icons/lib/fa/reddit";
import FaHashtag from "react-icons/lib/fa/hashtag";

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
          <a
            href="https://www.reddit.com/r/projecttox/"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.reddit")}
            style={styles.socialLink}
          >
            <FaReddit color={Theme.Colors.BACKGROUND} size={24} />
          </a>
          <a
            href="https://webchat.freenode.net/?channels=tox,tox-dev,toktok"
            rel="noopener noreferrer"
            target="_blank"
            title={t("footer:links.irc")}
            style={styles.socialLink}
          >
            <FaHashtag color={Theme.Colors.BACKGROUND} size={24} />
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
