import React from "react";
import { Helmet } from "react-helmet";

import styles from "./styles";

// Images.
import hero from "./../../assets/illustrations/tox-illustration.png";
import hero2x from "./../../assets/illustrations/tox-illustration@2x.png";
import encryption from "./../../assets/illustrations/encryption-illustration.png";
import encryption2x from "./../../assets/illustrations/encryption-illustration@2x.png";
import distributed from "./../../assets/illustrations/distributed-illustration.png";
import distributed2x from "./../../assets/illustrations/distributed-illustration@2x.png";
import freeLibre from "./../../assets/illustrations/free-libre-illustration.png";
import freeLibre2x from "./../../assets/illustrations/free-libre-illustration@2x.png";
import instantMessaging from "./../../assets/illustrations/messaging-illustration.png";
import instantMessaging2x from "./../../assets/illustrations/messaging-illustration@2x.png";
import videoCall from "./../../assets/illustrations/video-illustration.png";
import videoCall2x from "./../../assets/illustrations/video-illustration@2x.png";
import voiceCall from "./../../assets/illustrations/voice-illustration.png";
import voiceCall2x from "./../../assets/illustrations/voice-illustration@2x.png";
import fileSharing from "./../../assets/illustrations/file-sharing-illustration.png";
import fileSharing2x from "./../../assets/illustrations/file-sharing-illustration@2x.png";
import groupChats from "./../../assets/illustrations/group-chats-illustration.png";
import groupChats2x from "./../../assets/illustrations/group-chats-illustration@2x.png";
import screenSharing from "./../../assets/illustrations/screen-sharing-illustration.png";
import screenSharing2x from "./../../assets/illustrations/screen-sharing-illustration@2x.png";

import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import ResponsiveContainer from "../../components/ResponsiveContainer";

export class IndexPage extends React.Component {
  render() {
    const { t } = this.props;
    const mainFeatures = [
      {
        image: encryption,
        image_2x: encryption2x,
        alt: t("indexPage:features.encrypted.alt"),
        tagline: t("indexPage:features.encrypted.tagline"),
        lead: t("indexPage:features.encrypted.lead")
      },
      {
        image: distributed,
        image_2x: distributed2x,
        alt: t("indexPage:features.distributed.alt"),
        tagline: t("indexPage:features.distributed.tagline"),
        lead: t("indexPage:features.distributed.lead")
      },
      {
        image: freeLibre,
        image_2x: freeLibre2x,
        alt: t("indexPage:features.free.alt"),
        tagline: t("indexPage:features.free.tagline"),
        lead: t("indexPage:features.free.lead")
      }
    ];

    const imFeatures = [
      {
        image: instantMessaging,
        image_2x: instantMessaging2x,
        alt: t("indexPage:features.instant-messaging.alt"),
        tagline: t("indexPage:features.instant-messaging.tagline"),
        lead: t("indexPage:features.instant-messaging.lead")
      },
      {
        image: groupChats,
        image_2x: groupChats2x,
        alt: t("indexPage:features.groups.alt"),
        tagline: t("indexPage:features.groups.tagline"),
        lead: t("indexPage:features.groups.lead")
      },
      {
        image: voiceCall,
        image_2x: voiceCall2x,
        alt: t("indexPage:features.voice-call.alt"),
        tagline: t("indexPage:features.voice-call.tagline"),
        lead: t("indexPage:features.voice-call.lead")
      },
      {
        image: videoCall,
        image_2x: videoCall2x,
        alt: t("indexPage:features.video-call.alt"),
        tagline: t("indexPage:features.video-call.tagline"),
        lead: t("indexPage:features.video-call.lead")
      },
      {
        image: fileSharing,
        image_2x: fileSharing2x,
        alt: t("indexPage:features.file-sharing.alt"),
        tagline: t("indexPage:features.file-sharing.tagline"),
        lead: t("indexPage:features.file-sharing.lead")
      },
      {
        image: screenSharing,
        image_2x: screenSharing2x,
        alt: t("indexPage:features.screen-sharing.alt"),
        tagline: t("indexPage:features.screen-sharing.tagline"),
        lead: t("indexPage:features.screen-sharing.lead")
      }
    ];

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
            {mainFeatures.map((feature, index) => (
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
            {imFeatures
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
            {imFeatures
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
