import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Badge,
  Divider,
  Drawer,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
    setsearchPos(null)
  };
  const [showDrawer, setshowDrawer] = useState(false);
  const [searchPos, setsearchPos] = useState(null);
  const handleSearchPos=(e)=>{
    setsearchPos(e.currentTarget)
  }
  const openSearch=Boolean(searchPos)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setshowDrawer(true);
            }}
          >
            <MenuIcon
            />
          </IconButton>
          <Drawer
            open={showDrawer}
            onClose={() => {
              setshowDrawer(false);
            }}
          >
            <Box role="presentation" sx={{ width: 270 }}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText>Categories</ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
          >
            SHOPLIFY
          </Typography>
          {/* search */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSearchPos}
          >
            <SearchIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={searchPos}
            open={openSearch}
            onClose={handleClose}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search for products"
              inputProps={{ "aria-label": "Search for products"}}
            />
            <IconButton
              sx={{ p: "10px", mr: 1}}
              aria-label="search"
              onClick={() => {
                console.log("click");
              }}
            >
              <SearchIcon />
            </IconButton>
          </Menu>
          {/* search end */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
          >
            <Badge badgeContent={4} color="secondary">
              <CartIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
