import { SystemOS } from "../../components/SystemDetector";

export const DOWNLOADS = {
  [SystemOS.ANDROID]: {
    name: "Android",
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
    name: "iPhone",
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
    name: "Linux",
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
        uri: "https://flathub.org/tox",
        name: "Flatpak Hub",
        icon: "https://flathub.org/img/logo.svg"
      }
    ]
  },
  [SystemOS.MACOSX]: {
    name: "Mac OSX",
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/v0.1.0/osx",
        format: "dmg"
      },
      {
        type: "store",
        uri: "https://itunes.apple.com/us/app/antidote-for-tox/id933117605",
        name: "App Store",
        icon: "http://svgur.com/i/62B.svg"
      }
    ]
  },
  [SystemOS.WINDOWS]: {
    name: "Windows",
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
  [SystemOS.FREEBSD]: {
    name: "FreeBSD"
  },
  [SystemOS.SAILFISH]: {
    name: "Sailfish"
  },
  [SystemOS.WINDOWS_PHONE]: {
    name: "Windows Phone"
  }
};
