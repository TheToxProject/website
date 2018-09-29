import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import styles from "./styles";

export class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceWidth: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    typeof window !== 'undefined' && window.addEventListener("resize", this.updateWindowDimensions);
    typeof window !== 'undefined' && window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    typeof window !== 'undefined' && window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      deviceWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
      deviceHeight: typeof window !== 'undefined' ? window.innerHeight : 0
    });
  }

  render() {
    const { image, image_2x, alt, tagline, lead } = this.props;
    const { deviceWidth } = this.state;

    return (
      <div style={styles.heroContainer}>
        <MediaQuery minWidth={768} values={{ width: deviceWidth || 1600 }}>
          {image != null && (
            <img
              src={image}
              srcSet={image_2x ? `${image_2x} 2x` : undefined}
              style={styles.heroIllustration}
              alt={alt}
            />
          )}
        </MediaQuery>
        <MediaQuery maxWidth={768} values={{ width: deviceWidth || 1600 }}>
          {image != null && (
            <img
              src={image}
              srcSet={image_2x ? `${image_2x} 2x` : undefined}
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
