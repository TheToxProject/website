import React from "react";
import { getI18n } from "react-i18next";

import styles from "./styles";

import { languagesInfos } from "./../../i18n/languages";

import buttonStyle from "./../Button/styles";
import Theme from "./../../config/theme";
import ResponsiveContainer from "./../ResponsiveContainer";

const BASE_URL = "https://d2srrzh48sp2nh.cloudfront.net/1966b824/images/flags/";

export class LangSwitcher extends React.Component {
  constructor(props, context) {
    super(props);

    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.state = {
      lang: "en",
      handleHover: false,
      toggled: false,
      deviceWidth: 0,
      deviceHeight: 0
    };
  }

  componentWillMount() {
    const i18n = getI18n();
    this.setState({ lang: i18n.language });

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

  handleHover(e) {
    this.setState({ handleHover: !this.state.handleHover });
  }

  changeLanguage(lang) {
    const i18n = getI18n();
    i18n.changeLanguage(lang);
    this.setState({ lang });
    this.toggleSwitch();
  }

  toggleSwitch() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const { t } = this.props;
    const { handleHover, lang, toggled } = this.state;
    const hoverStyle = handleHover || toggled ? buttonStyle.buttonHover : {};
    const switchVisibilityStyle = toggled
      ? { opacity: 1, transform: "translate(0px, 0px)" }
      : { opacity: 0, transform: "translate(0px, -300px)" };

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end"
        }}
      >
        <a
          onClick={this.toggleSwitch}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          style={{
            ...buttonStyle.button,
            ...styles.link,
            ...hoverStyle
          }}
        >
          <span>
            {String(this.state.lang)
              .substr(0, 2)
              .toUpperCase()}
          </span>
        </a>
        <ResponsiveContainer
          styles={{ ...styles.languagesContainer, ...switchVisibilityStyle }}
          mobileStyles={{
            ...styles.languagesContainer,
            ...switchVisibilityStyle,
            ...{
              maxWidth: "auto",
              width: this.state.deviceWidth - 60, // 30px each side.
              right: 0,
              justifyCcontent: "space-around"
            }
          }}
        >
          {Object.keys(languagesInfos).map((key, index) => {
            const language = languagesInfos[key];
            const isLanguageActive = lang === language.twoLettersCode;
            const activeStyle = isLanguageActive
              ? { backgroundColor: Theme.Colors.SECONDARY_BACKGROUND }
              : {};
            return (
              <ResponsiveContainer
                key={language.twoLettersCode}
                onClick={() =>
                  this.changeLanguage.call(this, language.twoLettersCode)
                }
                styles={{ ...styles.languageLink, ...activeStyle }}
                mobileStyles={{
                  ...styles.languageLink,
                  ...activeStyle,
                  ...{ maxWidth: "auto", width: "100%" }
                }}
              >
                <img
                  style={styles.languageImage}
                  src={`${BASE_URL}${language.flag}.png`}
                  alt={language.name}
                />
                {language.name}
              </ResponsiveContainer>
            );
          })}
          <a
            style={styles.helpUs}
            href="https://crowdin.com/project/tox-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("commons:lang-switch.help-us-translating")}
          </a>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default LangSwitcher;
