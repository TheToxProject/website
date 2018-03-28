import React from "react";
import { Helmet } from "react-helmet";
/*import {
  FaLinux,
  FaWindows,
  FaApple,
  FaAndroid,
  FaInternetExplorer
} from "react-icons/lib/fa";*/

import styles from "./styles";
import Button from "../../components/Button";
import Hero from "../../components/Hero";
import SystemDetector from "../../components/SystemDetector";
import ResponsiveContainer from "../../components/ResponsiveContainer";
//import Theme from "../../config/theme";

import { DOWNLOADS } from "./data";
import screenshot from "../../assets/screens/multi-devices.png";

export class DownloadPage extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  getLinksForPlatform(platform) {
    if (DOWNLOADS[platform] && DOWNLOADS[platform].links) {
      return DOWNLOADS[platform].links;
    }

    return [];
  }

  render() {
    const { t } = this.props;

    return (
      <div style={styles.pageWrapper}>
        <Helmet>
          <title>Tox &mdash; {t("downloadPage:hero.tagline")}</title>
          <meta name="description" content={t("downloadPage:hero.lead")} />
          <meta
            property="og:title"
            content={`Tox - ${t("downloadPage:hero.tagline")}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tox.chat" />
          <meta
            property="og:image"
            content={null /* @todo Put the download illustration here */}
          />
          <meta property="og:site_name" content="Tox" />
          <meta
            property="og:description"
            content={t("downloadPage:hero.lead")}
          />
        </Helmet>
        <div style={styles.container}>
          <div style={styles.downloads}>
            <SystemDetector>
              {({ arch, os: platform }) => {
                const downloadLinks = this.getLinksForPlatform(platform);
                return (
                  <ResponsiveContainer
                    styles={styles.left}
                    mobileStyles={{ width: "100%" }}
                  >
                    <Hero
                      //image={hero}
                      //image_2x={hero2x}
                      alt={t("downloadPage:hero.alt")}
                      tagline={t("downloadPage:hero.tagline")}
                      lead={t("downloadPage:hero.lead")}
                    />
                    <div style={styles.buttonsContainer}>
                      {downloadLinks.map((link, index) => {
                        if (link.type === "store") {
                          return (
                            <Button
                              key={index * 2}
                              href={link.uri}
                              rel="noopener noreferrer"
                              target="_blank"
                              buttonStyle={styles.storeButton}
                              hoverStyle={styles.storeButtonHover}
                            >
                              <div style={styles.storeButtonWrapper}>
                                <img
                                  src={link.icon}
                                  style={styles.storeButtonIcon}
                                  alt={`${t("downloadPage:download.getItOn")} ${
                                    link.name
                                  }`}
                                />
                                <div style={styles.storeButtonTexts}>
                                  <span style={styles.getItOn}>
                                    {t("downloadPage:download.getItOn")}
                                  </span>
                                  <span style={styles.storeName}>
                                    {link.name}
                                  </span>
                                </div>
                              </div>
                            </Button>
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div style={styles.buttonsDivider} />
                    <div style={styles.buttonsContainer}>
                      {downloadLinks.map((link, index) => {
                        if (link.type === "direct") {
                          return (
                            <Button
                              key={index * 2}
                              href={link.uri}
                              rel="noopener noreferrer"
                              target="_blank"
                              text={link.format}
                              buttonStyle={styles.directButton}
                              //hoverStyle={styles.storeButtonHover}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                  </ResponsiveContainer>
                );
              }}
            </SystemDetector>
            <ResponsiveContainer
              styles={styles.screenshot}
              mobileStyles={{ display: "none" }}
            >
              <img src={screenshot} alt={"Tox running on multiple devices"} />
            </ResponsiveContainer>
          </div>
        </div>
        <div style={styles.downloadsWrapper}>
          <h1 style={styles.alsoAvailableOn}>
            {t("downloadPage:download.also-available-on")}
          </h1>
          <div style={styles.otherDownloads}>
            <SystemDetector>
              {({ arch, os }) => {
                return Object.keys(DOWNLOADS).map((key, index) => {
                  const platform = DOWNLOADS[key];
                  if (!platform.links || key === os) {
                    return null;
                  }

                  return (
                    <div style={styles.downloadContainer}>
                      <h2 style={{ marginTop: 8 }}>{platform.name}</h2>
                      {platform.links.map((link, index) => {
                        if (link.type !== "store") {
                          return null;
                        }

                        return (
                          <Button
                            key={index}
                            href={link.uri}
                            rel="noopener noreferrer"
                            target="_blank"
                            buttonStyle={styles.storeButton}
                            hoverStyle={styles.storeButtonHover}
                          >
                            <div style={styles.storeButtonWrapper}>
                              <img
                                src={link.icon}
                                style={styles.storeButtonIcon}
                                alt={`${t("downloadPage:download.getItOn")} ${
                                  link.name
                                }`}
                              />
                              <div style={styles.storeButtonTexts}>
                                <span style={styles.getItOn}>
                                  {t("downloadPage:download.getItOn")}
                                </span>
                                <span style={styles.storeName}>
                                  {link.name}
                                </span>
                              </div>
                            </div>
                          </Button>
                        );
                      })}
                    </div>
                  );
                });
              }}
            </SystemDetector>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadPage;
