import Theme from "./../../config/theme";

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: Theme.Constants.HEADER_HEIGHT,
    width: "100%",
    backgroundColor: Theme.Colors.HEADER
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    width: "100%"
  },
  logo: {
    height: Theme.Constants.LOGO_HEIGHT
  },
  menu: {
    display: "flex",
    flexDirection: "row"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    padding: "0 15px",
    height: 30,
    flex: "none"
  }
};

export default styles;
