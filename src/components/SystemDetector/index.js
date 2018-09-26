import React from "react";
import { SystemDetectorContext, SystemOS } from './Provider'

class SystemDetector extends React.Component {
  render() {
    const { children, render = children } = this.props;
    return (
      <SystemDetectorContext.Consumer>
        {({arch, platform}) => render({arch, platform})}
      </SystemDetectorContext.Consumer>
    )
  }
}

export { SystemOS };
export default SystemDetector;
