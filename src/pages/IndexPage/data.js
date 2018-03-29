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

export const getFeatures = t => {
  return {
    main: [
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
    ],
    messaging: [
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
    ]
  };
};

export const getFeaturedIns = t => {
  return [
    {
      name: "Wired",
      imageUrl: "https://svgshare.com/i/5wj.svg"
    },
    {
      name: "Linux.com",
      imageUrl: "https://i.imgur.com/aDlElFF.png"
    },
    /*{
      name: "CCN",
      imageUrl:
        "https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/themes/cryptocoinsnews/dist/images/logo.svg"
    },*/
    /*{
      name: "Korben",
      imageUrl: "https://i.imgur.com/V79HOKk.png",
      size: { width: 40, height: 40 }
    },
    {
      name: "Xakep",
      imageUrl: "https://xakep.ru/wp-content/uploads/2016/09/xakep_logo_ws.png",
      size: { width: 40, height: 40 }
    },*/
    {
      name: "MakeUseOf",
      imageUrl: "https://svgshare.com/i/5w0.svg",
      size: { width: 75, height: 40 }
    },
    {
      name: "The CoinTelegraph",
      imageUrl: "https://i.imgur.com/ktJAYGK.png"
    },

    {
      name: "NetzPolitik",
      imageUrl: "https://i.imgur.com/xgjnSHi.png"
    }
  ];
};
