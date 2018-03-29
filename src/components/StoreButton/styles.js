import Theme from "./../../config/theme";

const styles = {
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
  }
};

export default styles;
