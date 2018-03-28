import Theme from "./../../config/theme";

const styles = {
  pageWrapper: {
    margin: "36px 25px 0 25px",
    textAlign: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 0%",
    overflowX: "hidden"
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 0%"
  },
  downloadsWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 0%",
    backgroundColor: Theme.Colors.SECONDARY_BACKGROUND
  },
  downloads: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: Theme.Constants.MAX_WIDTH
    //borderBottom: `1px solid ${Theme.Colors.SECONDARY_BACKGROUND}`
  },
  otherDownloads: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "stretch",
    margin: "36px 25px",
    width: "100%",
    maxWidth: Theme.Constants.MAX_WIDTH + 100,
    padding: 8
  },
  alsoAvailableOn: {
    marginTop: 36,
    marginBottom: 0
  },
  downloadContainer: {
    flex: 1,
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 8,
    padding: "12px 16px",
    borderRadius: 6,
    backgroundColor: Theme.Colors.BACKGROUND,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
  },
  left: {
    width: "40%"
  },
  screenshot: {
    width: "60%"
  },
  buttonsDivider: {
    margin: "8px auto",
    height: 2,
    width: "80%",
    backgroundColor: Theme.Colors.SECONDARY_BACKGROUND
  },
  buttonsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    width: "100%",
    padding: 8
  },
  directButton: {
    margin: 8,
    flex: "none",
    backgroundColor: "black"
  },
  storeButton: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: 8,
    height: 60,
    maxHeight: 60,
    minWidth: 210,
    maxWidth: 280,
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
