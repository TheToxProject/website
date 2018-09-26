import React from "react";
import PropTypes from "prop-types";

export const SystemOS = {
  LINUX: "linux",
  WINDOWS: "windows",
  MACOSX: "mac-osx",
  FREEBSD: "freebsd",
  ANDROID: "android",
  IOS: "ios",
  WINDOWS_PHONE: "windows-phone",
  SAILFISH: "sailfish",
  UNKNOWN: "unknown"
};

export const SystemDetectorContext = React.createContext({
  arch: 0,
  platform: SystemOS.UNKNOWN
});

class SystemDetectorProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arch: 0,
      platform: SystemOS.UNKNOWN
    };
  }

  componentDidMount() {
    this.detect(this.props.ua);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.ua === this.props.ua) {
      return;
    }

    this.detect(nextProps.ua);
  }

  detect(ua) {
    let uaResults = {
      arch: 0,
      platform: SystemOS.UNKNOWN
    };

    /**
     * Architecture detection.
     */
    if (typeof window === "undefined") {
      return null;
    }

    if (
      ua.indexOf("WOW64") !== -1 ||
      ua.indexOf("x86_64") !== -1 ||
      ua.indexOf("x64") !== -1 ||
      ua.indexOf("Win64") !== -1 ||
      ua.indexOf("AMD64") !== -1
    ) {
      // Detect x64 devices.
      uaResults = {
        ...uaResults,
        arch: 64
      };
    }

    // Detect x32 devices.
    if (
      ua.indexOf("i386") !== -1 ||
      ua.indexOf("i686") !== -1 ||
      (ua.indexOf("Windows") !== -1 && uaResults.arch === 0)
    ) {
      uaResults = {
        ...uaResults,
        arch: 32
      };
    }

    /**
     * Platform detection.
     * @note Order matters for correct & accurate detection.
     */

    // Linux
    if (ua.indexOf("Linux") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.LINUX
      };
    }

    // Mac OSX
    if (ua.indexOf("Mac") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.MACOSX
      };
    }

    // iOS
    if (ua.indexOf("iPad") !== -1 || ua.indexOf("iPhone") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.IOS
      };
    }

    // FreeBSD
    if (ua.indexOf("FreeBSD") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.FREEBSD
      };
    }

    // Android
    if (ua.indexOf("Android") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.ANDROID
      };
    }

    // Windows
    if (ua.indexOf("Windows") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.WINDOWS
      };
    }

    // Windows Phone
    if (ua.indexOf("Windows Phone") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.WINDOWS_PHONE
      };
    }

    // SailfishOS
    if (ua.indexOf("Sailfish") !== -1 || ua.indexOf("Jolla") !== -1) {
      uaResults = {
        ...uaResults,
        platform: SystemOS.SAILFISH
      };
    }

    const { arch, platform } = uaResults;
    this.setState({ arch, platform });
  }

  render() {
    const { arch, platform } = this.state;
    const { children } = this.props;

    return (
      <SystemDetectorContext.Provider value={{ arch, platform }}>
        {React.Children.only(children)}
      </SystemDetectorContext.Provider>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  SystemDetectorProvider.propTypes = {
    ua: PropTypes.string.isRequired
  };
}

export default SystemDetectorProvider;
