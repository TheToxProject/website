import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./styles";

const LinkButton = props => {
  if (props.href) {
    return (
      <a {...props} style={props.style}>
        {props.children}
      </a>
    );
  } else {
    return (
      <Link {...props} style={props.style}>
        {props.children}
      </Link>
    );
  }
};

export class Button extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const {
      children,
      text,
      to,
      href,
      buttonStyle,
      hoverStyle,
      style,
      ...rest
    } = this.props;
    const { hover } = this.state;

    const hoveredStyle = hover
      ? { ...styles.buttonHover, ...hoverStyle }
      : null;

    const child = children ? React.Children.only(children) : null;
    const buttonContent = child == null ? text : child;

    return (
      <LinkButton
        to={to}
        href={href}
        target={href ? "_blank" : null}
        rel={href ? "noopener noreferrer" : null}
        style={{ ...styles.button, ...buttonStyle, ...hoveredStyle }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onClick={this.props.onClick}
        {...rest}
      >
        {buttonContent}
      </LinkButton>
    );
  }
}

Button.propTypes = {
  buttonStyle: PropTypes.object,
  children: PropTypes.element,
  text: PropTypes.string,
  // to: PropTypes.string.isRequired
};

Button.defaultProps = {
  buttonStyle: {}
};

export default Button;
