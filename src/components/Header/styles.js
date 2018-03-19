import Theme from "./../../config/theme";

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: Theme.Constants.HEADER_HEIGHT,
    width: "100%",
    backgroundColor: Theme.Colors.HEADER,
    padding: "0 24px"
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    width: "100%"
  },
  mobileMenu: {
    marginRight: 24
  },
  logo: {
    height: Theme.Constants.LOGO_HEIGHT,
    flex: "1"
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1
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
