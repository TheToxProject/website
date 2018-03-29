import { FaLinux, FaWindows, FaApple, FaAndroid } from "react-icons/lib/fa";
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
    icon: FaAndroid,
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/android",
        format: "Android package (.apk)"
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
    icon: FaApple,
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
    icon: FaLinux,
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/linux/deb",
        format: "Debian package (.deb)"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/linux/rpm",
        format: "Fedora package (.rpm)"
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
    icon: FaApple,
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/osx",
        format: "Mac app (.dmg)"
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
    icon: FaWindows,
    screenshot: "",
    links: [
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/x86",
        format: "Windows 32bits"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/x64",
        format: "Windows 64bits"
      },
      {
        type: "direct",
        uri: "https://downloads.tox.chat/windows/portable",
        format: "Portable (x86)"
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
    name: "Windows Phone",
    icon: FaWindows
  }
};
