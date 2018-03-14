import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { translate } from "react-i18next";

import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles";

const START_YEAR = 2013;

export class Layout extends React.Component {
  render() {
    const { t, component: Component, ...rest } = this.props;
    const currentYear = new Date();

    return (
      <Route
        {...rest}
        render={matchProps => (
          <div style={styles.appContainer}>
            <Header t={t} />
            <div style={styles.contentWrapper}>
              <Component t={t} {...matchProps} />
            </div>
            <Footer
              t={t}
              copyright={`Copyright (c) Tox & contributors ${START_YEAR}-${currentYear.getUTCFullYear()}.`}
              tagline="Made with 💖 around the Earth."
            />
          </div>
        )}
      />
    );
  }
}

Layout.propTypes = {
  component: PropTypes.any.isRequired
};

export default translate("menu", { wait: true })(Layout);
