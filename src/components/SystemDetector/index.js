import React from "react";

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

export class SystemDetector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arch: 0,
      os: SystemOS.UNKNOWN
    };
  }

  componentWillMount() {
    this.detect();
  }

  detect() {
    /**
     * Architecture detection.
     */
    if (typeof window === "undefined") {
      return null;
    }

    if (
      window.navigator.userAgent.indexOf("WOW64") !== -1 ||
      window.navigator.userAgent.indexOf("x86_64") !== -1 ||
      window.navigator.userAgent.indexOf("x64;") !== -1 ||
      window.navigator.userAgent.indexOf("Win64") !== -1 ||
      window.navigator.userAgent.indexOf("AMD64") !== -1
    ) {
      // Detect x64 devices.
      this.setState({ arch: 64 });
    }

    // Detect x32 devices.
    if (
      window.navigator.userAgent.indexOf("i386") !== -1 ||
      window.navigator.userAgent.indexOf("i686") !== -1 ||
      (window.navigator.userAgent.indexOf("Windows") !== -1 &&
        this.state.arch === 0)
    ) {
      this.setState({ arch: 32 });
    }

    /**
     * Platform detection.
     * @note Order matters for correct & accurate detection.
     */

    // Linux
    if (window.navigator.userAgent.indexOf("Linux") !== -1) {
      this.setState({ os: SystemOS.LINUX });
    }

    // Mac OSX
    if (window.navigator.userAgent.indexOf("Mac") !== -1) {
      this.setState({ os: SystemOS.MACOSX });
    }

    // iOS
    if (
      window.navigator.userAgent.indexOf("iPad") !== -1 ||
      window.navigator.userAgent.indexOf("iPhone") !== -1
    ) {
      this.setState({ os: SystemOS.IOS });
    }

    // FreeBSD
    if (window.navigator.userAgent.indexOf("FreeBSD") !== -1) {
      this.setState({ os: SystemOS.FREEBSD });
    }

    // Android
    if (window.navigator.userAgent.indexOf("Android") !== -1) {
      this.setState({ os: SystemOS.ANDROID });
    }

    // Windows
    if (window.navigator.userAgent.indexOf("Windows") !== -1) {
      this.setState({ os: SystemOS.WINDOWS });
    }

    // Windows Phone
    if (window.navigator.userAgent.indexOf("Windows Phone") !== -1) {
      this.setState({ os: SystemOS.WINDOWS_PHONE });
    }

    // SailfishOS
    if (
      window.navigator.userAgent.indexOf("Sailfish") !== -1 ||
      window.navigator.userAgent.indexOf("Jolla") !== -1
    ) {
      this.setState({ os: SystemOS.SAILFISH });
    }
  }

  render() {
    const { children, render = children } = this.props;
    const { arch, os } = this.state;

    return render({ arch, os, key: os });
  }
}

export default SystemDetector;
