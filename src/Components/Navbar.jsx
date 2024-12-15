import React, { useState } from 'react';
import { CiSearch, CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const isLoggedIn = false;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      {/* Close Button */}
      <div className="flex justify-between items-center p-4">
        <h3 className="font-bold text-lg">Menu</h3>
        <CloseIcon onClick={toggleDrawer(false)} className="cursor-pointer" />
      </div>
      <Divider />

      {/* Links */}
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CiHeart />
            </ListItemIcon>
            <Link to="/" className="text-black">
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoCartOutline />
            </ListItemIcon>
            <Link to="/about" className="text-black">
              About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoCartOutline />
            </ListItemIcon>
            <Link to="/product" className="text-black">
              Products
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CiUser />
            </ListItemIcon>
            <Link to="/contact" className="text-black">
              Contact Us
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CiUser />
            </ListItemIcon>
            <Link to="/signup" className="text-black">
              Sign Up
            </Link>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      {/* Categories Section */}
      <h3 className="font-bold text-lg px-4 mt-4">Categories</h3>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/categories/spice" className="text-black">
              Spice
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <Link to="/categories/dry-fruits" className="text-black">
              Dry Fruits
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex justify-between items-center shadow-md border-black px-[3%] max-w-[1100] bg-[#fbfaf4] h-16 relative">
      {/* Open Drawer Menu Button */}
      <div className="absolute left-4">
        <Button onClick={toggleDrawer(true)} className="block md:hidden">
          <MenuIcon style={{color:"#DB4444"}}/>
        </Button>
      </div>

      {/* Logo */}
      <div className="flex items-center sm ml-16 md:ml-0">
        <img src={logo} className="h-12" alt="logo" />
        <h1 className="text-2xl font-semibold cursor-pointer">Qadir</h1>
      </div>

      {/* For Desktop */}
      <ul className="hidden md:flex items-center gap-8">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="product">Products</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact">Contact Us</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="signup">Sign Up</Link>
        </li>
      </ul>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      {/* Search and Icons */}
      <div className="items-center flex gap-12">
        <div className="flex h-9">
          <input
            type="text"
            placeholder="Search Products"
            className="p-1 pl-6 bg-[#F2EED7] border-solid rounded-s-xl"
          />
          <CiSearch
            style={{ borderLeft: '1px solid black' }}
            className="cursor-pointer bg-[#F2EED7] h-9 w-10 p-2 rounded-e-xl text-2xl"
          />
        </div>
        <div className="flex text-2xl gap-5">
          <Link to="favorite">
            <CiHeart className="cursor-pointer" />
          </Link>
          <Link to="cart">
            <IoCartOutline />
          </Link>
          {isLoggedIn ? (
            <Link to="/">
              <CiUser className="cursor-pointer" />
            </Link>
          ) : (
            <Link to="signup">
              <CiUser className="cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
