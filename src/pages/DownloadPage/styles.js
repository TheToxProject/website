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
  storeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: 8,
    height: 60,
    backgroundColor: "black",
    borderRadius: 4,
    color: "white",
    textDecoration: "none",
    transition: "all 280ms ease-in-out"
  },
  storeButtonHover: {
    backgroundColor: Theme.Colors.PRIMARY,
    color: Theme.Colors.BACKGROUND
  },
  storeButtonWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    height: 60,
    width: "100%"
  },
  storeButtonIcon: {
    width: 36,
    height: 36,
    margin: 8
  },
  storeButtonTexts: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 8,
    padding: 2
  },
  getItOn: {
    fontSize: 11
    //textTransform: "uppercase"
  },
  storeName: {
    margin: 0,
    fontSize: 20,
    fontWeight: "bold"
  },
  featuresContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "36px 25px",
    backgroundColor: Theme.Colors.SECONDARY_BACKGROUND
  },
  featuresWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: Theme.Constants.MAX_WIDTH
  },
  feature: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
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
