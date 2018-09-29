import encryption from "./../../assets/illustrations/encryption-illustration.svg";
import distributed from "./../../assets/illustrations/distributed-illustration.svg";
import freeLibre from "./../../assets/illustrations/free-libre-illustration.svg";
import instantMessaging from "./../../assets/illustrations/messaging-illustration.svg";
import videoCall from "./../../assets/illustrations/video-illustration.svg";
import voiceCall from "./../../assets/illustrations/voice-illustration.svg";
import fileSharing from "./../../assets/illustrations/file-sharing-illustration.svg";
import groupChats from "./../../assets/illustrations/group-chats-illustration.svg";
import screenSharing from "./../../assets/illustrations/video-illustration.svg";

export const getFeatures = t => {
  return {
    main: [
      {
        image: encryption,
        alt: t("indexPage:features.encrypted.alt"),
        tagline: t("indexPage:features.encrypted.tagline"),
        lead: t("indexPage:features.encrypted.lead")
      },
      {
        image: distributed,
        alt: t("indexPage:features.distributed.alt"),
        tagline: t("indexPage:features.distributed.tagline"),
        lead: t("indexPage:features.distributed.lead")
      },
      {
        image: freeLibre,
        alt: t("indexPage:features.free.alt"),
        tagline: t("indexPage:features.free.tagline"),
        lead: t("indexPage:features.free.lead")
      }
    ],
    messaging: [
      {
        image: instantMessaging,
        alt: t("indexPage:features.instant-messaging.alt"),
        tagline: t("indexPage:features.instant-messaging.tagline"),
        lead: t("indexPage:features.instant-messaging.lead")
      },
      {
        image: groupChats,
        alt: t("indexPage:features.groups.alt"),
        tagline: t("indexPage:features.groups.tagline"),
        lead: t("indexPage:features.groups.lead")
      },
      {
        image: voiceCall,
        alt: t("indexPage:features.voice-call.alt"),
        tagline: t("indexPage:features.voice-call.tagline"),
        lead: t("indexPage:features.voice-call.lead")
      },
      {
        image: videoCall,
        alt: t("indexPage:features.video-call.alt"),
        tagline: t("indexPage:features.video-call.tagline"),
        lead: t("indexPage:features.video-call.lead")
      },
      {
        image: fileSharing,
        alt: t("indexPage:features.file-sharing.alt"),
        tagline: t("indexPage:features.file-sharing.tagline"),
        lead: t("indexPage:features.file-sharing.lead")
      },
      {
        image: screenSharing,
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
