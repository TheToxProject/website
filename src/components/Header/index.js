import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

import FaConnectdevelop from "react-icons/lib/fa/connectdevelop";
import MdMenu from "react-icons/lib/md/menu";
import MdFileDownload from "react-icons/lib/md/file-download";
import MdInfoOutline from "react-icons/lib/md/info-outline";
import MdLightbulbOutline from "react-icons/lib/md/lightbulb-outline";
import MdChatBubbleOutline from "react-icons/lib/md/chat-bubble-outline";

import styles from "./styles";
import logo from "./../../assets/logo/logo-white.svg";

import Button from "./../Button";
import LangSwitcher from "./../LangSwitcher";
import ResponsiveContainer from "../ResponsiveContainer";
import SystemDetector, { DeviceType } from "../SystemDetector";

const Logo = props => (
  <Link to={"/"} style={props.style}>
    <img style={props.style} src={logo} alt="Tox brand logo" {...props} />
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

  componentDidMount() {
    this.updateWindowDimensions();
    typeof window !== "undefined" &&
      window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    typeof window !== "undefined" &&
      window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      deviceWidth: typeof window !== "undefined" ? window.innerWidth : 0,
      deviceHeight: typeof window !== "undefined" ? window.innerHeight : 0
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
      {
        text: t("menu:links.download"),
        to: "/download",
        icon: props => <MdFileDownload {...props} />
      },
      {
        text: t("menu:links.about"),
        to: "/about",
        icon: props => <MdLightbulbOutline {...props} />
      },
      {
        text: t("menu:links.wiki"),
        to: "/wiki",
        icon: props => <MdInfoOutline {...props} />
      },
      {
        text: t("menu:links.blog"),
        to: "/blog",
        icon: props => <MdChatBubbleOutline {...props} />
      },
      {
        text: "TokTok",
        to: "",
        href: "https://toktok.ltd/",
        icon: props => <FaConnectdevelop {...props} />
      }
    ];

    const drawerStyle = drawerOpened
      ? { opacity: 1, transform: "translate(0px, 0px)" }
      : { opacity: 0, transform: `translate(-${deviceWidth}px, 0px)` };

    return (
      <div style={{ width: "100%" }}>
        <div style={styles.headerContainer}>
          <div style={styles.navWrapper}>
            <SystemDetector>
              {({ deviceType }) => (
                <React.Fragment>
                  <MediaQuery
                    maxWidth={768}
                    values={{
                      width: deviceType === DeviceType.PHONE ? 767 : deviceWidth
                    }}
                  >
                    <MdMenu
                      size={24}
                      color={"white"}
                      style={styles.mobileMenu}
                      onClick={this.toggleDrawer}
                    />
                  </MediaQuery>
                  <MediaQuery
                    maxWidth={768}
                    values={{
                      width: deviceType === DeviceType.PHONE ? 767 : deviceWidth
                    }}
                  >
                    {showLogo && (
                      <div style={{ flex: 1 }}>
                        <Logo style={{ ...styles.logo }} />
                      </div>
                    )}
                  </MediaQuery>
                  <MediaQuery
                    minWidth={768}
                    values={{
                      width: deviceType === DeviceType.PHONE ? 767 : deviceWidth
                    }}
                  >
                    {showLogo && <Logo style={styles.logo} />}
                    {showNavigation && (
                      <div style={styles.menu}>
                        {menuLinks.map((link, index) => (
                          <Button
                            key={link.to || link.href}
                            text={link.text}
                            to={link.to}
                            href={link.href}
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
                </React.Fragment>
              )}
            </SystemDetector>
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
            {menuLinks.map((link, index) => {
              const LinkIcon = link.icon;
              return (
                <Button
                  key={index}
                  to={link.to}
                  href={link.href}
                  buttonStyle={styles.drawerLink}
                  hoverStyle={styles.drawerLinkHover}
                  onClick={this.toggleDrawer}
                >
                  <div>
                    <LinkIcon size={20} style={styles.drawerLinkIcon} />
                    <span>{link.text}</span>
                  </div>
                </Button>
              );
            })}
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
