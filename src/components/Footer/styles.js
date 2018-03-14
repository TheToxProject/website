import Theme from "./../../config/theme";

const styles = {
  footerContainer: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 48,
    backgroundColor: Theme.Colors.HEADER,
    color: Theme.Colors.BACKGROUND
  },
  copyright: {
    margin: "0 0 16px 0",
    padding: 0,
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: 300,
    color: Theme.Colors.SECONDARY_BACKGROUND
  },
  credits: {
    margin: "0 0 16px 0",
    padding: 0,
    fontSize: 14
  },
  social: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16
  },
  socialLink: {
    marginRight: 16
  }
};

export default styles;
