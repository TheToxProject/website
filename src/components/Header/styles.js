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
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: Theme.Constants.MAX_WIDTH,
    width: "100%"
  },
  mobileMenu: {
    marginRight: 24,
    cursor: "pointer"
  },
  logo: {
    height: Theme.Constants.LOGO_HEIGHT,
    flex: "1"
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    width: '100%'
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    padding: "0 15px",
    height: 30,
    flex: "none"
  },
  drawerOverlay: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, .6)",
    zIndex: 100,
    cursor: "pointer"
  },
  drawer: {
    backgroundColor: Theme.Colors.BACKGROUND,
    position: "absolute",
    top: 0,
    left: 0,
    width: "70%",
    maxWidth: "360px",
    minWidth: "300px",
    height: "100vh",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxShadow: "3px 0 6px rgba(0,0,0,0.16), 3px 0 6px rgba(0,0,0,0.23)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    zIndex: 600
  },
  drawerLogoWrapper: {
    display: "flex",
    height: 200,
    width: "100%",
    backgroundColor: Theme.Colors.HEADER,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerLogo: {
    flex: 0
  },
  drawerLinks: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "8px 0",
    width: "100%",
    height: "100%",
    backgroundColor: Theme.Colors.BACKGROUND,
    fontWeight: 500
  },
  drawerLink: {
    display: "flex",
    height: "48px",
    width: "100%",
    padding: "0 16px 0 24px",
    flex: "0 0 48px",
    borderRadius: 0,
    textAlign: "left",
    justifyContent: "flex-start",
    backgroundColor: Theme.Colors.BACKGROUND,
    color: Theme.Colors.TEXT_DARK,
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  },
  drawerLinkHover: {
    backgroundColor: Theme.Colors.SECONDARY_BACKGROUND,
    color: Theme.Colors.TEXT_PRIMARY
  },
  drawerLinkIcon: {
    marginRight: 16
  }
};

export default styles;
