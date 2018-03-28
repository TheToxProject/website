import { SystemOS } from "../../components/SystemDetector";

import PlayStoreIcon from "../../assets/icons/google-play.png";
import AppleIcon from "../../assets/icons/apple.svg";
import WindowsIcon from "../../assets/icons/windows.svg";
import FdroidIcon from "../../assets/icons/fdroid.svg";
import SnapcraftIcon from "../../assets/icons/snapcraft.svg";
import FalthubIcon from "../../assets/icons/flathub.svg";

export const DOWNLOADS = {
  [SystemOS.ANDROID]: {
    name: "Android",
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/android",
        format: "apk"
      },
      {
        type: "store",
        uri: "https://play.google.com/store/apps/details?id=chat.tox.antox",
        name: "Play Store",
        icon: PlayStoreIcon
      },
      {
        type: "store",
        uri: "https://f-droid.org/packages/com.zoffcc.applications.trifa/",
        name: "F-Droid",
        icon: FdroidIcon
      }
    ]
  },
  [SystemOS.IOS]: {
    name: "iPhone",
    screenshot: "",
    links: [
      {
        type: "store",
        uri: "https://itunes.apple.com/app/antidote-for-tox/id933117605",
        name: "App Store",
        icon: AppleIcon
      }
    ]
  },
  [SystemOS.LINUX]: {
    name: "Linux",
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/linux/deb",
        format: "deb"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/linux/rpm",
        format: "rpm"
      },
      {
        type: "store",
        uri: "https://snapcraft.io/tox",
        name: "Snap Store",
        icon: SnapcraftIcon
      },
      {
        type: "store",
        uri: "https://flathub.org/tox",
        name: "Flatpak Hub",
        icon: FalthubIcon
      }
    ]
  },
  [SystemOS.MACOSX]: {
    name: "Mac OSX",
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/osx",
        format: "dmg"
      },
      {
        type: "store",
        uri: "https://itunes.apple.com/app/tox-desktop",
        name: "Mac App Store",
        icon: AppleIcon
      }
    ]
  },
  [SystemOS.WINDOWS]: {
    name: "Windows",
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/nsis",
        format: "nsis"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/msi",
        format: "msi"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/portable",
        format: "zip"
      },
      {
        type: "store",
        uri: "https://www.microsoft.com/store/p/tox",
        name: "Windows Store",
        icon: WindowsIcon
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
