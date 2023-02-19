import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {theme} from '../assets/theme';
import {routes} from '../routing';
import Link  from '@mui/material/Link';
import "../App.css"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// for the json object routes, get the name of each route
const pages = ["home", "projects","experience","about-me"]
type Anchor =  'right';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // style for quote and # 
  const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h5.fontWeight,
    letterSpacing: theme.typography.h5.letterSpacing, 
    fontSize: theme.typography.h5.fontSize,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    
  }

  const styleNavLink = {
    my: 2,
    mx: 1,
    flexDirection: 'row',
    display: 'flex',
    color: theme.palette.text.secondary, 
    fontFamily: theme.typography.fontFamily, 
    fontWeight: theme.typography.h6.fontWeight, 
    letterSpacing: theme.typography.h6.letterSpacing, 
    fontSize: theme.typography.h6.fontSize,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.hover,
      textDecoration: 'none',
    },
  }
  
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

const list = () => (
  <Box
    sx={{ width: 250, height:"100%" , backgroundColor: theme.palette.background.default }}
    role="presentation"
    onClick={toggleDrawer( false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {pages.map((text) => (
        <ListItem key={text} >
            <ListItemIcon>
            </ListItemIcon>
                <Link
                component="button"
                variant="body2"
                key={text}
                onClick={toggleDrawer(false)}
                sx={styleNavLink}
              >
                <Typography sx={styleSpecChar}>#</Typography>{text}
                </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <AppBar position="sticky" sx={{backgroundColor:theme.palette.background.default, boxShadow:'none'}}>
      <Drawer
          sx={{ display: { xs: 'flex', md: 'none' } }}
          anchor={"right"}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
            {list()}
      </Drawer>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h3.fontSize,
              fontWeight: theme.typography.h3.fontWeight,
              letterSpacing: theme.typography.h3.letterSpacing,
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
          <span style={ styleSpecChar}>"</span>Jean<span style={ styleSpecChar}>"</span>
          </Typography>
          <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Link
                component="button"
                variant="body2"
                key={page}
                onClick={toggleDrawer(false)}
                sx={styleNavLink}
              >
                <span style={ styleSpecChar}>#</span>{page}
            </Link>
            ))}
          </Box>
          <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

function setState(arg0: any) {
  throw new Error('Function not implemented.');
}
