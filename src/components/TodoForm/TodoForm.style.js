import { makeStyles } from "@material-ui/core";

export const todoFormStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: "75%",
    marginTop: "6rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      marginTop: "5rem",
      marginBottom: "1rem",
    },
  },
}));
