import Theme from "./../../config/theme";

const styles = {
  pageWrapper: {
    margin: "36px 25px 0 25px",
    textAlign: "center",
    width: "100%"
  },
  buttonsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    marginBottom: 36,
    padding: 8
  },
  button: {
    margin: 8
  },
  featuresContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "36px 0",
    backgroundColor: Theme.Colors.SECONDARY_BACKGROUND
  },
  featuresWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    padding: 12
  },
  featuresWrapperMobile: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    padding: 12
  },
  feature: {
    //flex: 1,
    margin: 12,
    flex: "1"
  },
  darkContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "36px 25px",
    backgroundColor: Theme.Colors.HEADER
  },
  darkWrapper: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH
  },
  tagline: {
    fontSize: 40,
    lineHeight: "44px",
    color: Theme.Colors.TEXT_PRIMARY,
    margin: 0
  },
  lead: {
    fontSize: 20,
    color: Theme.Colors.SECONDARY_BACKGROUND,
    marginTop: 24,
    marginBottom: 0,
    lineHeight: 1.6
  }
};

export default styles;
