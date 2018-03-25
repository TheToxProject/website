import Theme from "./../../config/theme";

const styles = {
  button: {
    display: "flex",
    flex: "0 0 210px",
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    borderRadius: 42,
    backgroundColor: Theme.Colors.BUTTON,
    color: "white",
    textDecoration: "none",
    fontWeight: "normal",
    fontSize: 18,
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonHover: {
    backgroundColor: Theme.Colors.PRIMARY
  }
};

export default styles;
