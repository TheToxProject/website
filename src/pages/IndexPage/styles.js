import Theme from "./../../config/theme";

const styles = {
  pageWrapper: {
    margin: "36px 25px 0 25px",
    textAlign: "center",
    width: "100%"
  },
  header: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    margin: "0 auto 36px auto"
  },
  hero: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "70%"
  },
  heroMobile: {
    maxWidth: "100%",
    padding: "0 16px"
  },
  appPreview: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "30%"
  },
  buttonsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    padding: 8
  },
  downloadBtn: {
    margin: 8,
    maxHeight: 46,
    width: 210
  },
  webappBtn: {
    backgroundColor: Theme.Colors.BACKGROUND,
    border: `2px solid ${Theme.Colors.BUTTON}`,
    color: Theme.Colors.BUTTON,
    margin: 8,
    maxHeight: 46,
    width: 210
  },
  btnHover: {
    color: Theme.Colors.BACKGROUND,
    backgroundColor: Theme.Colors.PRIMARY,
    border: "none"
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
    alignItems: "flex-start",
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
    margin: 12,
    flex: "1 1 30%",
    width: "33%"
  },
  featureMobile: {
    flex: 1
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
  taglineLight: {
    fontSize: 40,
    lineHeight: "44px",
    color: "white",
    margin: 0
  },
  lead: {
    fontSize: 20,
    color: Theme.Colors.SECONDARY_BACKGROUND,
    marginTop: 24,
    marginBottom: 0,
    lineHeight: 1.6
  },
  callout2nd: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "8px 25px",
    backgroundColor: Theme.Colors.HEADER
  },
  callout2ndText: {
    fontSize: 20,
    color: Theme.Colors.BACKGROUND,
    marginTop: 24,
    marginBottom: 8,
    lineHeight: 1.6
  },
  featuredInContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "8px 25px",
    backgroundColor: Theme.Colors.PRIMARY
  },
  featuredInWrapper: {
    padding: 16,
    maxWidth: Theme.Constants.MAX_WIDTH
  },
  featuredIn: {
    margin: 16
  },
  taglineFeaturedIn: {
    fontSize: 40,
    lineHeight: "44px",
    color: Theme.Colors.BACKGROUND,
    margin: 0,
    marginTop: 24
  },
  leadFeaturedIn: {
    fontSize: 20,
    color: Theme.Colors.BACKGROUND,
    marginTop: 8,
    marginBottom: 24,
    lineHeight: 1.6
  }
};

export default styles;
