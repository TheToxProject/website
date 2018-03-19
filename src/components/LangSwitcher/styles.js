import Theme from "./../../config/theme";

const styles = {
  languagesContainer: {
    position: "absolute",
    display: "flex",
    flexFlow: "row wrap",
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: 4,
    top: 40,
    right: 0,
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    width: 425,
    maxWidth: 425
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    padding: "0 15px",
    height: 30,
    flex: "none",
    marginLeft: 8,
    cursor: "pointer"
  },
  languageLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column wrap",
    margin: "8px",
    padding: "8px 16px",
    borderRadius: 4,
    cursor: "pointer",
    flex: 1,
    width: 120,
    maxWidth: 120
  },
  languageImage: {
    width: 48,
    height: 48
  },
  helpUs: {
    display: "flex",
    justifyContent: "flex-end",
    borderTop: "1px solid rgb(240, 240, 240)",
    padding: "12px 0 0 0",
    width: "100%",
    margin: "8px 8px 2px 8px",
    fontSize: 12,
    color: "#414141",
    cursor: "pointer",
    textDecoration: "none"
  }
};

export default styles;
