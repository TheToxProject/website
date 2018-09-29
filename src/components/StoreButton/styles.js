import Theme from "./../../config/theme";

const vars = {
  button: {},
  buttonIcon: {}
}

vars.button.minWidth = 210;
vars.button.maxWidth = 280;
vars.button.height = 60;
vars.button.radius = vars.button.height / 2;
vars.buttonIcon.size = 36;

const styles = {
  storeButton: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: 8,
    height: vars.button.height,
    maxHeight: vars.button.height,
    minWidth: vars.button.minWidth,
    maxWidth: vars.button.maxWidth,
    backgroundColor: "black",
    borderRadius: vars.button.radius,
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
    height: vars.button.height,
    width: "100%"
  },
  storeButtonIcon: {
    width: vars.buttonIcon.size,
    height: vars.buttonIcon.size,
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
  },
  storeName: {
    margin: 0,
    fontSize: 20,
    fontWeight: "bold"
  }
};

export default styles;
