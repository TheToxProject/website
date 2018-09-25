import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles";
import { getFeatures, getFeaturedIns } from "./data";

// Images.
import hero from "./../../assets/illustrations/tox-illustration.png";
import hero2x from "./../../assets/illustrations/tox-illustration@2x.png";

import Button from "./../../components/Button";
import Hero from "./../../components/Hero";
import Feature from "./../../components/Feature";
import ResponsiveContainer from "./../../components/ResponsiveContainer";
import FeaturedLogo from "./../../components/GrayscaleImage";

export class IndexPage extends React.Component {
  UNSAFE_componentWillMount() {
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  }

  render() {
    const { t } = this.props;
    const features = getFeatures(t);
    const featuredIns = getFeaturedIns();

    return (
      <div style={styles.pageWrapper}>
        <Helmet>
          <title>Tox &mdash; {t("indexPage:hero.tagline")}</title>
          <meta name="description" content={t("indexPage:hero.lead")} />
          <meta
            property="og:title"
            content={`Tox - ${t("indexPage:hero.tagline")}`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tox.chat" />
          <meta property="og:image" content={hero} />
          <meta property="og:site_name" content="Tox" />
          <meta property="og:description" content={t("indexPage:hero.lead")} />
        </Helmet>
        <div style={styles.header}>
          <ResponsiveContainer
            styles={styles.hero}
            mobileStyles={styles.heroMobile}
          >
            <Hero
              image={hero}
              image_2x={hero2x}
              alt={t("indexPage:hero.alt")}
              tagline={t("indexPage:hero.tagline")}
              lead={t("indexPage:hero.lead")}
            />
            <ResponsiveContainer
              styles={styles.buttonsContainer}
              mobileStyles={{
                ...styles.buttonsContainer,
                flexDirection: "column-reverse",
                alignItems: "center"
              }}
            >
              <Button
                to="/webapp"
                text={t("indexPage:1st-callout.try-the-app")}
                buttonStyle={styles.webappBtn}
                hoverStyle={styles.btnHover}
              />
              <Button
                to="/download"
                text={t("indexPage:1st-callout.download")}
                buttonStyle={styles.downloadBtn}
                hoverStyle={styles.btnHover}
              />
            </ResponsiveContainer>
          </ResponsiveContainer>
        </div>
        <div style={styles.featuresContainer}>
          <ResponsiveContainer
            styles={styles.featuresWrapper}
            mobileStyles={styles.featuresWrapperMobile}
          >
            {features.main.map((feature, index) => (
              <Feature
                key={index}
                style={styles.feature}
                image={feature.image}
                image_2x={feature.image_2x}
                alt={feature.alt}
                tagline={feature.tagline}
                lead={feature.lead}
              />
            ))}
          </ResponsiveContainer>
        </div>
        <div style={styles.darkContainer}>
          <div style={styles.darkWrapper}>
            <h2 style={styles.tagline}>{t("indexPage:2nd-callout.tagline")}</h2>
            <p style={styles.lead}>{t("indexPage:2nd-callout.lead")}</p>
          </div>
        </div>
        <div style={styles.featuresContainer}>
          <ResponsiveContainer
            styles={styles.featuresWrapper}
            mobileStyles={styles.featuresWrapperMobile}
          >
            {features.messaging.map((feature, index) => (
              <Feature
                key={index}
                style={styles.feature}
                mobileStyles={styles.featureMobile}
                image={feature.image}
                image_2x={feature.image_2x}
                alt={feature.alt}
                tagline={feature.tagline}
                lead={feature.lead}
              />
            ))}
          </ResponsiveContainer>
        </div>
        <div style={styles.callout2nd}>
          <p style={styles.callout2ndText}>{t("downloadPage:hero.lead")}</p>
          <ResponsiveContainer
            styles={{
              ...styles.buttonsContainer
            }}
            mobileStyles={{
              ...styles.buttonsContainer,
              flexDirection: "column-reverse",
              alignItems: "center"
            }}
          >
            <Button
              key={"2nd-callout-webapp"}
              to="/webapp"
              text={t("indexPage:1st-callout.try-the-app")}
              buttonStyle={{
                ...styles.downloadBtn,
                backgroundColor: "rgba(0,0,0,.25)"
              }}
              hoverStyle={styles.btnHover}
            />
            <Button
              key={"2nd-callout-download"}
              to="/download"
              text={t("indexPage:1st-callout.download")}
              buttonStyle={{ ...styles.webappBtn, border: "none" }}
              hoverStyle={styles.btnHover}
            />
          </ResponsiveContainer>
        </div>
        <div style={styles.featuredInContainer}>
          <ResponsiveContainer
            styles={styles.featuredInWrapper}
            mobileStyles={styles.featuredInWrapper}
          >
            <h2 style={styles.taglineFeaturedIn}>
              {t("indexPage:featured.tagline")}
            </h2>
            <p style={styles.leadFeaturedIn}>{t("indexPage:featured.lead")}</p>

            {featuredIns.map((company, index) => (
              <FeaturedLogo
                key={company.name}
                source={company.imageUrl}
                width={company.size ? company.size.width : 200}
                height={company.size ? company.size.height : 40}
                title={company.name}
                style={styles.featuredIn}
              />
            ))}
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default IndexPage;
