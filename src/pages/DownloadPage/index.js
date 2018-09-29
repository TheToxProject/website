import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles";
import Button from "../../components/Button";
import StoreButton from "../../components/StoreButton";
import Hero from "../../components/Hero";
import SystemDetector from "../../components/SystemDetector";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import Theme from "../../config/theme";

import { DOWNLOADS } from "./data";
import screenshot from "../../assets/screens/multi-devices.png";

export class DownloadPage extends React.Component {
  
  componentDidMount() {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }

  getLinksForPlatform(platform) {
    if (DOWNLOADS[platform] && DOWNLOADS[platform].links) {
      return DOWNLOADS[platform].links;
    }

    return [];
  }

  getIconForPlatform(platform) {
    if (DOWNLOADS[platform] && DOWNLOADS[platform].icon) {
      return DOWNLOADS[platform].icon;
    }

    return null;
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
              {({ arch, platform }) => {
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
                            <StoreButton
                              key={link.uri}
                              uri={link.uri}
                              icon={link.icon}
                              name={link.name}
                              getItOn={t("downloadPage:download.getItOn")}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                    <div style={styles.buttonsContainer}>
                      {downloadLinks.map((link, index) => {
                        if (link.type === "direct") {
                          return (
                            <Button
                              key={link.uri}
                              href={link.uri}
                              rel="noopener noreferrer"
                              target="_blank"
                              text={link.format}
                              buttonStyle={styles.directButton}
                              hoverStyle={styles.directButtonHover}
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
              {({ arch, platform: os }) => {
                return Object.keys(DOWNLOADS).map((key, index) => {
                  const platform = DOWNLOADS[key];
                  if (!platform.links || key === os) {
                    return null;
                  }

                  return (
                    <div key={key} style={styles.downloadContainer}>
                      <h2 style={styles.downloadTitle}>
                        {platform.icon({
                          size: 20,
                          color: Theme.Colors.HEADER,
                          style: { marginRight: 8, lineHeight: 18 }
                        })}
                        {platform.name}
                      </h2>
                      {platform.links.map((link, index) => {
                        if (link.type !== "store") {
                          return null;
                        }

                        return (
                          <StoreButton
                            key={link.uri}
                            uri={link.uri}
                            icon={link.icon}
                            name={link.name}
                            getItOn={t("downloadPage:download.getItOn")}
                          />
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
