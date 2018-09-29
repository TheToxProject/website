import React from "react";
import { SystemDetectorContext, SystemOS, DeviceType } from './Provider'

class SystemDetector extends React.Component {
  render() {
    const { children, render = children } = this.props;
    return (
      <SystemDetectorContext.Consumer>
        {({arch, platform, deviceType}) => render({arch, platform, deviceType})}
      </SystemDetectorContext.Consumer>
    )
  }
}

export { SystemOS, DeviceType };
export default SystemDetector;
