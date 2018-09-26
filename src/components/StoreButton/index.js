import React from "react";
import PropTypes from "prop-types";

import buttonStyle from "../Button/styles";
import styles from "./styles";

export class StoreButton extends React.Component {
  constructor(props) {
    super(props);

    this.onHover = this.onHover.bind(this);

    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const { uri, icon, name, getItOn } = this.props;
    const { hover } = this.state;
    const hoverStyle = hover
      ? { ...buttonStyle.buttonHover, ...styles.storeButtonHover }
      : {};

    return (
      <a
        href={uri}
        rel="noopener noreferrer"
        target="_blank"
        style={{ ...buttonStyle.button, ...styles.storeButton, ...hoverStyle }}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
      >
        <div style={styles.storeButtonWrapper}>
          <img
            src={icon}
            style={styles.storeButtonIcon}
            alt={`${getItOn} ${name}`}
          />
          <div style={styles.storeButtonTexts}>
            <span style={styles.getItOn}>{getItOn}</span>
            <span style={styles.storeName}>{name}</span>
          </div>
        </div>
      </a>
    );
  }
}

StoreButton.propTypes = {
  uri: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  getItOn: PropTypes.string.isRequired
};

export default StoreButton;
