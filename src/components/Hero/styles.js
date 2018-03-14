import Theme from "./../../config/theme";

const styles = {
  heroContainer: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 30%"
  },
  heroIllustration: {
    width: 698,
    height: "auto",
    maxWidth: "100%",
    maxHeight: 325
  },
  tagline: {
    fontSize: 40,
    lineHeight: "44px",
    margin: "20px 0 10px 0"
  },
  lead: {
    color: Theme.Colors.PRIMARY,
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 1.15,
    lineHeight: 1.4,
    padding: "20px 0 30px 0",
    margin: 0
  }
};

export default styles;
