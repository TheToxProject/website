import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles";
import { getFeatures } from "./features";

// Images.
import hero from "./../../assets/illustrations/tox-illustration.png";
import hero2x from "./../../assets/illustrations/tox-illustration@2x.png";

import Button from "./../../components/Button";
import Hero from "./../../components/Hero";
import Feature from "./../../components/Feature";
import ResponsiveContainer from "./../../components/ResponsiveContainer";
import FeaturedLogo from "./../../components/GrayscaleImage";

export class IndexPage extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);

    console.log(FeaturedLogo);
  }

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
        <div style={styles.featuredInContainer}>
          <ResponsiveContainer
            styles={styles.featuredInWrapper}
            mobileStyles={styles.featuredInWrapper}
          >
            <h2 style={styles.taglineFeaturedIn}>
              {t("indexPage:featured.tagline")}
            </h2>
            <p style={styles.leadFeaturedIn}>{t("indexPage:featured.lead")}</p>
            <FeaturedLogo
              source={"https://svgshare.com/i/5wj.svg"}
              width={200}
              height={40}
              title={"Wired"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={"https://i.imgur.com/aDlElFF.png"}
              width={200}
              height={40}
              title={"Linux.com"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={
                "https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/themes/cryptocoinsnews/dist/images/logo.svg"
              }
              width={200}
              height={40}
              title={"CCN.com"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={
                "https://xakep.ru/wp-content/uploads/2016/09/xakep_logo_ws.png"
              }
              width={75}
              height={40}
              title={"Xakep.ru"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={"https://i.imgur.com/ktJAYGK.png"}
              width={200}
              height={40}
              title={"CoinTelegraph"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={"https://i.imgur.com/V79HOKk.png"}
              width={40}
              height={40}
              title={"Korben"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={"https://i.imgur.com/xgjnSHi.png"}
              width={200}
              height={40}
              title={"netzpolitik.org"}
              style={styles.featuredIn}
            />
            <FeaturedLogo
              source={"https://svgshare.com/i/5w0.svg"}
              width={100}
              height={40}
              title={"MakeUseOf"}
              style={styles.featuredIn}
            />
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default IndexPage;
