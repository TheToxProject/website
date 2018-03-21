import React, { Component } from "react";
import PropTypes from "prop-types";

class GrayscaleImage extends Component {
  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);
    this.state = {
      hovered: false
    };
  }

  toggleHover() {
    const { hovered } = this.state;
    this.setState({ hovered: !hovered });
  }

  render() {
    const { source, title, alt, width, height, style, ...rest } = this.props;
    const { hovered } = this.state;

    const defaultStyle = {
      ...style,
      filter: "grayscale(100%)",
      width: width,
      height: height,
      resizeMode: "contain",
      transition: "filter 380ms ease-in-out"
    };

    const hoverStyle = {
      ...defaultStyle,
      filter: "none"
    };

    const imageStyle = hovered ? hoverStyle : defaultStyle;

    return (
      <img
        {...rest}
        src={source}
        alt={alt || title}
        title={title}
        style={imageStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      />
    );
  }
}

GrayscaleImage.propTypes = {
  source: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object
};

GrayscaleImage.defaultProps = {
  alt: "",
  style: {}
};

export default GrayscaleImage;
