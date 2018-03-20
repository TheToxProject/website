import React from "react";
import { Helmet } from "react-helmet";
import {
  FaLinux,
  FaWindows,
  FaApple,
  FaAndroid,
  FaInternetExplorer
} from "react-icons/lib/fa";

import styles from "./styles";
import Button from "../../components/Button";
import Hero from "../../components/Hero";
import SystemDetector, { SystemOS } from "../../components/SystemDetector";
import Theme from "../../config/theme";

export class DownloadPage extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
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
        <div style={styles.buttonsContainer}>
          <SystemDetector>
            {({ arch, os }) => {
              if (os === SystemOS.LINUX) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaLinux
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/linux"
                      text={`${t(
                        "downloadPage:download-for"
                      )} Linux ${arch} bits`}
                    />
                    <p>Ubuntu, Fedora, ArchLinux, AppImage</p>
                  </div>
                );
              } else if (os === SystemOS.WINDOWS) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaWindows
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/windows"
                      text={`${t(
                        "downloadPage:download-for"
                      )} Windows ${arch} bits`}
                    />
                  </div>
                );
              } else if (os === SystemOS.MACOSX) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaApple
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/macosx"
                      text={`${t(
                        "downloadPage:download-for"
                      )} Mac OSX ${arch} bits`}
                    />
                  </div>
                );
              } else if (os === SystemOS.ANDROID) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaAndroid
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/android"
                      text={`${t("downloadPage:download-for")} Android`}
                    />
                  </div>
                );
              } else if (os === SystemOS.IOS) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaApple
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/ios"
                      text={`${t("downloadPage:download-for")} iOS`}
                    />
                  </div>
                );
              } else if (os === SystemOS.WINDOWS_PHONE) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaApple
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <Button
                      to="/download/windows-phone"
                      text={`${t("downloadPage:download-for")} Windows Phone`}
                    />
                  </div>
                );
              } else if (SystemOS.UNKNOWN) {
                return (
                  <div style={{ width: "auto" }}>
                    <FaInternetExplorer
                      size={96}
                      color={Theme.Colors.TEXT_DARK}
                      style={{ margin: 16 }}
                    />
                    <p>{t("downloadPage:unavailable-platform")}</p>
                  </div>
                );
              }
            }}
          </SystemDetector>
        </div>
      </div>
    );
  }
}

export default DownloadPage;
