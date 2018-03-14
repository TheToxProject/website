import Theme from "./../../config/theme";

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: Theme.Colors.BACKGROUND
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: "100%"
  }
};

export default styles;
