import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getI18n } from "react-i18next";
import MediaQuery from "react-responsive";
import { MdMenu } from "react-icons/lib/md";

import styles from "./styles";
import logo from "./../../assets/logo/logo-white.png";
import logo2x from "./../../assets/logo/logo-white@2x.png";

import { languagesInfos } from "./../../i18n/languages";

import Button from "./../Button";
import buttonStyle from "./../Button/styles";
import Theme from "../../config/theme";

const BASE_URL = "https://d2srrzh48sp2nh.cloudfront.net/1966b824/images/flags/";

export class LangSwitcher extends React.Component {
  constructor(props, context) {
    super(props);

    this.openSwitch = this.openSwitch.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleHover = this.handleHover.bind(this);

    this.state = {
      lang: "en",
      langSwitchHover: false,
      toggled: false
    };
  }

  componentWillMount() {
    const i18n = getI18n();
    this.setState({ lang: i18n.language });
  }

  handleHover(e) {
    this.setState({ langSwitchHover: !this.state.langSwitchHover });
  }

  changeLanguage(lang) {
    const i18n = getI18n();
    i18n.changeLanguage(lang);
    this.setState({ lang });
  }

  openSwitch() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const { t } = this.props;
    const { langSwitchHover, lang, toggled } = this.state;
    const hoverStyle = langSwitchHover ? buttonStyle.buttonHover : {};
    const switchVisibilityStyle = toggled
      ? { display: "flex", opacity: 1 }
      : { opacity: 0, display: "none" };

    return (
      <div style={{ position: "relative" }}>
        <a
          onClick={this.openSwitch}
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
        <div style={{ ...styles.languagesContainer, ...switchVisibilityStyle }}>
          {Object.keys(languagesInfos).map((key, index) => {
            const language = languagesInfos[key];
            const isLanguageActive = lang === language.twoLettersCode;
            const activeStyle = isLanguageActive
              ? { backgroundColor: Theme.Colors.SECONDARY_BACKGROUND }
              : {};
            return (
              <a
                key={language.twoLettersCode}
                onClick={() =>
                  this.changeLanguage.call(this, language.twoLettersCode)
                }
                style={{ ...styles.languageLink, ...activeStyle }}
              >
                <img
                  style={styles.languageImage}
                  src={`${BASE_URL}${language.flag}.png`}
                  alt={language.name}
                />
                {language.name}
              </a>
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
        </div>
      </div>
    );
  }
}

export default LangSwitcher;
