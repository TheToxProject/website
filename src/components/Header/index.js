import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { MdMenu } from "react-icons/lib/md";

import styles from "./styles";
import logo from "./../../assets/logo/logo-white.png";
import logo2x from "./../../assets/logo/logo-white@2x.png";

import Button from "./../Button";
import LangSwitcher from "./../LangSwitcher";

const Logo = props => (
  <Link to={"/"} style={styles.logo}>
    <img
      style={styles.logo}
      src={logo}
      srcSet={`${logo2x} 2x`}
      alt="Tox brand logo"
    />
  </Link>
);

export class Header extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { t, showLogo, showNavigation } = this.props;
    const menuLinks = [
      { text: t("menu:links.download"), to: "/download" },
      { text: t("menu:links.about"), to: "/about" },
      { text: t("menu:links.wiki"), to: "/wiki" },
      { text: t("menu:links.blog"), to: "/blog" },
      { text: "TokTok", to: "/toktok" }
    ];

    return (
      <div style={styles.headerContainer}>
        <div style={styles.navWrapper}>
          <MediaQuery maxWidth={768}>
            <MdMenu size={24} color={"white"} style={styles.mobileMenu} />
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            {showLogo && <Logo style={{ ...styles.logo }} />}
          </MediaQuery>
          <MediaQuery minWidth={768}>
            {showLogo && <Logo style={styles.logo} />}
            {showNavigation && (
              <div style={styles.menu}>
                {menuLinks.map((link, index) => (
                  <Button
                    key={index}
                    text={link.text}
                    to={link.to}
                    buttonStyle={
                      index !== menuLinks.length - 1
                        ? { ...styles.link, marginRight: 8 }
                        : styles.link
                    }
                  />
                ))}
              </div>
            )}
          </MediaQuery>
          <LangSwitcher t={t} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  showLogo: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showLangSwitcher: PropTypes.bool
};

Header.defaultProps = {
  showLogo: true,
  showNavigation: true,
  showLangSwitcher: true
};

export default Header;
