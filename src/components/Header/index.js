import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getI18n } from "react-i18next";
import MediaQuery from "react-responsive";
import { MdMenu } from "react-icons/lib/md";

import styles from "./styles";
import logo from "./../../assets/logo/logo-white.png";
import logo2x from "./../../assets/logo/logo-white@2x.png";

import Button from "./../Button";
import buttonStyle from "./../Button/styles";

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

    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleHover = this.handleHover.bind(this);

    this.state = {
      lang: "en",
      langSwitchHover: false
    };
  }

  componentWillMount() {
    const i18n = getI18n();
    this.setState({ lang: i18n.language });
  }

  handleHover(e) {
    this.setState({ langSwitchHover: !this.state.langSwitchHover });
  }

  changeLanguage() {
    const i18n = getI18n();
    i18n.changeLanguage(this.state.lang === "en" ? "fr" : "en");
    this.setState({ lang: this.state.lang === "en" ? "fr" : "en" });
  }

  render() {
    const { t, showLogo, showNavigation } = this.props;
    const { langSwitchHover } = this.state;

    const hoverStyle = langSwitchHover ? buttonStyle.buttonHover : {};

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
          <a
            onClick={this.changeLanguage}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            style={{
              ...buttonStyle.button,
              ...styles.link,
              ...hoverStyle,
              ...{
                marginLeft: 8,
                cursor: "pointer"
              }
            }}
          >
            <span>
              {String(this.state.lang)
                .substr(0, 2)
                .toUpperCase()}
            </span>
          </a>
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
