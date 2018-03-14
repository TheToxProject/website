import Theme from "./../../config/theme";

const styles = {
  featureContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  featureIllustration: {
    width: 180,
    height: 180,
    maxWidth: "100%",
    maxHeight: 180,
    userSelect: "none"
  },
  tagline: {
    fontSize: 30,
    lineHeight: "33px",
    margin: "20px 0 10px 0"
  },
  lead: {
    color: Theme.Colors.TEXT_DARK,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 1.4,
    padding: 0,
    margin: 0
  }
};

export default styles;
