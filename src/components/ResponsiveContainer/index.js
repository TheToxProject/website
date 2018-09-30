import React from "react";
import MediaQuery from "react-responsive";
import SystemDetector, { DeviceType } from "../SystemDetector";

const ResponsiveContainer = props => (
  <SystemDetector>
    {({ deviceType }) => (
      <MediaQuery maxWidth={768}>
        {matches => {
          let children = React.Children.toArray(props.children);
          const { styles, mobileStyles, ...rest } = props;

          return deviceType === DeviceType.PHONE || matches ? (
            <div style={{ ...mobileStyles }} {...rest}>
              {children}
            </div>
          ) : (
            <div style={{ ...styles }} {...rest}>
              {children}
            </div>
          );
        }}
      </MediaQuery>
    )}
  </SystemDetector>
);

export default ResponsiveContainer;
