import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import styles from "./styles";

export class Hero extends React.Component {
  render() {
    const { image, image_2x, alt, tagline, lead } = this.props;

    return (
      <div style={styles.heroContainer}>
        <MediaQuery minWidth={768}>
          {image != null && (
            <img
              src={image}
              srcSet={`${image_2x} 2x`}
              style={styles.heroIllustration}
              alt={alt}
            />
          )}
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          {image != null && (
            <img
              src={image}
              srcSet={`${image_2x} 2x`}
              style={styles.heroIllustrationMobile}
              alt={alt}
            />
          )}
        </MediaQuery>
        <h1 style={styles.tagline}>{tagline}</h1>
        <p style={styles.lead}>{lead}</p>
      </div>
    );
  }
}

Hero.propTypes = {
  image: PropTypes.string,
  image_2x: PropTypes.string,
  alt: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired
};

export default Hero;
