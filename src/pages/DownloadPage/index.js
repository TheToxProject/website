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
import SystemDetector, { SystemOS } from "../../components/SystemDetector";
//import Theme from "../../config/theme";

const DOWNLOADS = {
  [SystemOS.ANDROID]: {
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/android",
        format: "apk"
      },
      {
        type: "store",
        uri: "https://play.google.com/store/apps/details?id=chat.tox.antox",
        name: "Play Store",
        icon:
          "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.amz.mshcdn.com%2FK1p5PL4669x6LLyGzxlqe25Xtsc%3D%2Ffit-in%2F1200x9600%2Fhttps%253A%252F%252Fblueprint-api-production.s3.amazonaws.com%252Fuploads%252Fcard%252Fimage%252F475500%252Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png&f=1"
      },
      {
        type: "store",
        uri: "https://f-droid.org/packages/com.zoffcc.applications.trifa/",
        name: "F-Droid",
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/F-Droid_Logo_4.svg/1024px-F-Droid_Logo_4.svg.png"
      }
    ]
  },
  [SystemOS.IOS]: {
    screenshot: "",
    links: [
      {
        type: "store",
        uri: "https://itunes.apple.com/us/app/antidote-for-tox/id933117605",
        name: "App Store",
        icon: "http://svgur.com/i/62B.svg"
      }
    ]
  },
  [SystemOS.LINUX]: {
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/linux/deb",
        format: "deb"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/linux/rpm",
        format: "rpm"
      },
      {
        type: "store",
        uri: "https://snapcraft.io/tox",
        name: "Snap Store",
        icon: "http://svgur.com/i/63D.svg"
      },
      {
        type: "store",
        uri: "https://flathub.io/tox",
        name: "Flatpak Hub",
        icon: "https://flathub.org/img/logo.svg"
      }
    ]
  },
  [SystemOS.MACOSX]: {
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/osx",
        format: "dmg"
      }
    ]
  },
  [SystemOS.WINDOWS]: {
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/windows/nsis",
        format: "nsis"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/windows/msi",
        format: "msi"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/windows/portable",
        format: "zip"
      }
    ]
  },
  [SystemOS.FREEBSD]: {},
  [SystemOS.SAILFISH]: {},
  [SystemOS.WINDOWS_PHONE]: {}
};

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
        <Hero
          //image={hero}
          //image_2x={hero2x}
          alt={t("downloadPage:hero.alt")}
          tagline={t("downloadPage:hero.tagline")}
          lead={t("downloadPage:hero.lead")}
        />
        <div style={styles.lol}>
          <SystemDetector>
            {({ arch, os: platform }) => {
              const downloadLinks = this.getLinksForPlatform(platform);
              return (
                <div style={{ width: "auto" }}>
                  <div style={styles.buttonsContainer}>
                    {downloadLinks.map(link => {
                      if (link.type === "store") {
                        return (
                          <Button
                            href={link.uri}
                            rel="noopener noreferrer"
                            target="_blank"
                            buttonStyle={styles.storeButton}
                            hoverStyle={{
                              ...styles.storeButton,
                              ...styles.storeButtonHover
                            }}
                          >
                            <div style={styles.storeButtonWrapper}>
                              <img
                                src={link.icon}
                                style={styles.storeButtonIcon}
                                alt={`Download Tox on the ${link.name}`}
                              />
                              <div style={styles.storeButtonTexts}>
                                <span style={styles.getItOn}>
                                  Download Tox on the
                                </span>
                                <span style={styles.storeName}>
                                  {link.name}
                                </span>
                              </div>
                            </div>
                          </Button>
                        );
                      }

                      /**
                       * TODO: Implement other sort of links too.
                       */
                      return null;
                    })}
                  </div>
                </div>
              );
            }}
          </SystemDetector>
        </div>
      </div>
    );
  }
}

export default DownloadPage;
