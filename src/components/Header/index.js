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
import ResponsiveContainer from "../ResponsiveContainer";

const Logo = props => (
  <Link to={"/"} style={props.style}>
    <img
      style={props.style}
      src={logo}
      srcSet={`${logo2x} 2x`}
      alt="Tox brand logo"
      {...props}
    />
  </Link>
);

export class Header extends React.Component {
  constructor(props, context) {
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      drawerOpened: false,
      deviceHeight: 0,
      deviceWidth: 0
    };
  }

  componentWillMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      deviceWidth: window.innerWidth,
      deviceHeight: window.innerHeight
    });
  }

  toggleDrawer() {
    const { drawerOpened } = this.state;

    document.body.classList.toggle("stop-scrolling");
    this.setState({ drawerOpened: !drawerOpened });
  }

  render() {
    const { t, showLogo, showNavigation } = this.props;
    const { drawerOpened, deviceWidth } = this.state;
    const menuLinks = [
      { text: t("menu:links.download"), to: "/download" },
      { text: t("menu:links.about"), to: "/about" },
      { text: t("menu:links.wiki"), to: "/wiki" },
      { text: t("menu:links.blog"), to: "/blog" },
      { text: "TokTok", to: "/toktok" }
    ];

    const drawerStyle = drawerOpened
      ? { opacity: 1, transform: "translate(0px, 0px)" }
      : { opacity: 0, transform: `translate(-${deviceWidth}px, 0px)` };

    return (
      <div style={{ width: "100%" }}>
        <div style={styles.headerContainer}>
          <div style={styles.navWrapper}>
            <MediaQuery maxWidth={768}>
              <MdMenu
                size={24}
                color={"white"}
                style={styles.mobileMenu}
                onClick={this.toggleDrawer}
              />
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
        <ResponsiveContainer styles={{ display: "none" }}>
          <div
            style={{ ...styles.drawerOverlay, ...drawerStyle }}
            onClick={this.toggleDrawer}
          />
        </ResponsiveContainer>
        <ResponsiveContainer
          mobileStyles={{ ...styles.drawer, ...drawerStyle }}
          styles={{ display: "none" }}
        >
          <div style={styles.drawerLogoWrapper}>
            <Logo
              style={{ ...styles.drawerLogo }}
              onClick={this.toggleDrawer}
            />
          </div>
          <div style={styles.drawerLinks}>
            {menuLinks.map((link, index) => (
              <Button
                key={index}
                text={link.text}
                to={link.to}
                buttonStyle={styles.drawerLink}
                onClick={this.toggleDrawer}
              />
            ))}
          </div>
        </ResponsiveContainer>
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
