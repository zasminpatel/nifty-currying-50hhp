import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
//https://codesandbox.io/s/deopk?file=/demo.js
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App - Fron End
            </Typography>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/about">
              About
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
