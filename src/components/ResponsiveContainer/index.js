import React from "react";
import MediaQuery from "react-responsive";

const ResponsiveContainer = props => (
  <MediaQuery maxWidth={768}>
    {matches => {
      let children = React.Children.toArray(props.children);
      return matches ? (
        <div style={{ ...props.mobileStyles }}>{children}</div>
      ) : (
        <div style={{ ...props.styles }}>{children}</div>
      );
    }}
  </MediaQuery>
);

export default ResponsiveContainer;
