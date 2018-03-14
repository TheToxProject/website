import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

export class Hero extends React.Component {
  render() {
    const { image, image_2x, alt, tagline, lead } = this.props;

    return (
      <div style={styles.heroContainer}>
        <img
          src={image}
          srcSet={`${image_2x} 2x`}
          style={styles.heroIllustration}
          alt={alt}
        />
        <h1 style={styles.tagline}>{tagline}</h1>
        <p style={styles.lead}>{lead}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  image_2x: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired
};

export default Hero;
