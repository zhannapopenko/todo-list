import { makeStyles } from "@material-ui/core";

export const todoStyles = makeStyles((theme) => ({
  mainBox: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    width: "75%",
    minHeight: "4.5rem",
    maxHeight: "6rem",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
    borderBottom: "1px solid #1f71db",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      minHeight: "4.5rem",
      paddingBottom: "0.3rem",
      marginBottom: "0.5rem",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    margin: "0.3rem",
    flex: 1,
  },
  textFieldContainer: {
    display: "flex",
    flex: 20,
    padding: "0.5rem",
    margin: "0 0.3rem",
  },
  textField: {
    width: "100%",
  },
  textDecoration: {
    textDecoration: "line-through",
    color: "grey",
    display: "flex",
    alignItems: "flex-start",
    overflowWrap: "anywhere",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  text: {
    display: "flex",
    alignItems: "flex-start",
    overflowWrap: "anywhere",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));
