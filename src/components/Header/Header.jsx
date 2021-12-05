import { AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          TO-DO LIST
        </Typography>
        <Button variant="text" color="inherit">
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
};
