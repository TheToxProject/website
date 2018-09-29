import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import ResponsiveContainer from "../ResponsiveContainer";

export class Feature extends React.Component {
  render() {
    const {
      image,
      image_2x,
      alt,
      tagline,
      lead,
      style,
      mobileStyles
    } = this.props;

    return (
      <ResponsiveContainer
        styles={{ ...styles.featureContainer, ...style }}
        mobileStyles={{ ...mobileStyles }}
      >
        <img
          src={image}
          srcSet={image_2x ? `${image_2x} 2x` : undefined}
          style={styles.featureIllustration}
          alt={alt}
        />
        <h2 style={styles.tagline}>{tagline}</h2>
        <p style={styles.lead}>{lead}</p>
      </ResponsiveContainer>
    );
  }
}

Feature.propTypes = {
  image: PropTypes.string.isRequired,
  image_2x: PropTypes.string,
  alt: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default Feature;
