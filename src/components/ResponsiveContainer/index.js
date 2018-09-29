import React from "react";
import MediaQuery from "react-responsive";

const ResponsiveContainer = props => (
  <MediaQuery maxWidth={768} values={{ deviceWidth: 1024 }}>
    {matches => {
      let children = React.Children.toArray(props.children);
      const { styles, mobileStyles, ...rest } = props;

      return matches ? (
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
);

export default ResponsiveContainer;
