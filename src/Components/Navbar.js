import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const drawerWidth = 250;

const styling = {
  textDecoration: "none",
  color: "inherit",
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [flag, setFlag] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setFlag(!flag);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [jump, setJump] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: jump ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="d-flex flex-row justify-content-between gap-2">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"></Typography>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <IconButton color="inherit">
                <MailIcon />
              </IconButton>
              <IconButton color="inherit">
                <NotificationsActiveIcon />
              </IconButton>
              <Link to="/addbook" style={styling}>
                <Button color="inherit">Add Book </Button>
              </Link>
              <Button
                color="inherit"
                id="basic-button"
                aria-controls={open1 ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick}
                className="d-flex flex-row gap-2"
              >
                <Avatar sx={{ bgcolor: "Red" }}>S</Avatar>
                <span>
                  Admin {flag ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              </Button>
              <Button
                color="inherit"
                onClick={() => {
                  setJump(!jump);
                }}
              >
                {jump ? <DarkModeOutlinedIcon /> : <WbSunnyIcon />}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open1}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {["Profile", "My Account", "Logout"].map((element, index) => {
                  return (
                    <MenuItem key={index} onClick={handleClose}>
                      {element}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div className="d-flex flex-row justify-content-center align-items-center p-3">
              <img
                src={`https://www.freeiconspng.com/thumbs/open-book-icon/open-book-icon-19.png`}
                alt="website-logo"
                height="60"
                width="60"
                className="img-thumbnail"
              />
              <span className="fs-4">@OpénBook</span>
            </div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { name: "HOME", path: "/" },
              { name: "DASHBOARD", path: "/dashboard" },
              { name: "List of Books", path: "/books" },
              { name: "Issued Books", path: "/issued" },
              { name: "About", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Terms & Conditions", path: "/TnC" },
            ].map((element, index) => (
              <ListItem key={index} disablePadding>
                <Link to={element.path} style={styling}>
                  <ListItemButton>
                    <ListItemText primary={element.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
