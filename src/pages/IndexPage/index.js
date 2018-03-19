import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles";

// Images.
import hero from "./../../assets/illustrations/tox-illustration.png";
import hero2x from "./../../assets/illustrations/tox-illustration@2x.png";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import ResponsiveContainer from "../../components/ResponsiveContainer";
import { getFeatures } from "./features";

export class IndexPage extends React.Component {
  render() {
    const { t } = this.props;
    const features = getFeatures(t);

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
        <Hero
          image={hero}
          image_2x={hero2x}
          alt={t("indexPage:hero.alt")}
          tagline={t("indexPage:hero.tagline")}
          lead={t("indexPage:hero.lead")}
        />
        <div style={styles.buttonsContainer}>
          <Button
            to="/download"
            buttonStyle={styles.button}
            text={t("indexPage:1st-callout.download")}
          />
          <Button
            to="/webapp"
            text={t("indexPage:1st-callout.try-the-app")}
            buttonStyle={styles.button}
          />
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
            {features.messaging
              .slice(0, 3)
              .map((feature, index) => (
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
          <ResponsiveContainer
            styles={styles.featuresWrapper}
            mobileStyles={styles.featuresWrapperMobile}
          >
            {features.messaging
              .slice(3, 6)
              .map((feature, index) => (
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
      </div>
    );
  }
}

export default IndexPage;
