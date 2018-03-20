import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./styles";

export class Button extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      hover: false
    };
  }

  handleHover(e) {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { children, text, to, buttonStyle, ...props } = this.props;
    const { hover } = this.state;

    const hoverStyle = hover ? styles.buttonHover : {};
    let style = { ...styles.button, ...buttonStyle, ...hoverStyle };

    return (
      <Link
        to={to}
        style={style}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={props.onClick}
      >
        {text && !children ? (
          text
        ) : !text && children ? (
          <children {...props} />
        ) : null}
      </Link>
    );
  }
}

Button.propTypes = {
  buttonStyle: PropTypes.object,
  children: PropTypes.element,
  text: PropTypes.string,
  to: PropTypes.string.isRequired
};

Button.defaultProps = {
  buttonStyle: {}
};

export default Button;
