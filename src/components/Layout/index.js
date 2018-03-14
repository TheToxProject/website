import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { translate } from "react-i18next";

import Header from "../Header";
import Footer from "../Footer";
import styles from "./styles";

export class Layout extends React.Component {
  render() {
    const { t, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <div style={styles.appContainer}>
            <Header t={t} />
            <div style={styles.contentWrapper}>
              <Component t={t} {...matchProps} />
            </div>
            <Footer t={t} />
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
