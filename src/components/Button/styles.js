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
    fontWeight: 200,
    fontSize: 18,
    transition: "background 0.2s ease-in-out",
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonHover: {
    backgroundColor: Theme.Colors.PRIMARY
  }
};

export default styles;
