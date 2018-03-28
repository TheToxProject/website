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
      ...rest
    } = this.props;
    const { hover } = this.state;

    const btnStyle = hover ? { ...styles.buttonHover, ...hoverStyle } : null;
    let style = { ...styles.button, ...buttonStyle, ...btnStyle };

    const child = children ? React.Children.only(children) : null;
    const buttonContent = child == null ? text : child;

    const LinkButton = props => {
      if (href) {
        return (
          <a
            {...props}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            style={props.style}
          >
            {props.children}
          </a>
        );
      } else {
        return (
          <Link
            {...props}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
            style={props.style}
          >
            {props.children}
          </Link>
        );
      }
    };

    return (
      <LinkButton
        to={to}
        href={href}
        target={href ? "_blank" : null}
        rel={href ? "noopener noreferrer" : null}
        style={style}
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
  to: PropTypes.string.isRequired
};

Button.defaultProps = {
  buttonStyle: {}
};

export default Button;
