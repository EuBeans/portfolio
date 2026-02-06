import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {theme} from '../../assets/theme';
import Link  from '@mui/material/Link';
import "../../App.css"
import { Drawer, List, ListItem, ListItemIcon,  } from '@mui/material';
import {
  Link as RouterLink,
} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// for the json object routes, get the name of each route
import {routes} from "../../routing"
import { useLocation } from 'react-router-dom'
import { contactLinks } from '../../const/constants';

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  // list of routes

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

  const navIconStyle = {
    color: theme.palette.text.secondary,
    fontSize: '22px',
    '&:hover': {
      color: theme.palette.text.hover,
    },
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
      {routes.map((route) => (
        route.nav && 
        <ListItem key={route.name} >
            <ListItemIcon>
            </ListItemIcon>
              <Link
                component={RouterLink}
                to={route.path}
                variant="body2"
                onClick={toggleDrawer(false)}
                sx={[
                  styleNavLink,
                  {
                    color:
                      location.pathname === route.path
                        ? theme.palette.text.hover
                        : theme.palette.text.secondary,
                  },
                ]}
              >
                <span style={styleSpecChar}>#</span>
                {route.name}
              </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Drawer
        sx={{ display: { xs: 'flex', md: 'none' } }}
        anchor={"right"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        {routes.map((route) => (
          route.nav &&
          <Link
            component={RouterLink}
            to={route.path}
            variant="body2"
            onClick={toggleDrawer(false)}
            sx={[
              styleNavLink,
              {
                color:
                  location.pathname === route.path
                    ? theme.palette.text.hover
                    : theme.palette.text.secondary,
              },
            ]}
          >
            <span style={styleSpecChar}>#</span>
            {route.name}
          </Link>
        ))}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '8px' }}>
        <Link href={contactLinks.github} sx={navIconStyle} >
          <GitHubIcon sx={{width:"80%"}}/>
        </Link>
        <Link href={contactLinks.email} sx={navIconStyle} >
          <EmailIcon sx={{width:"80%"}}/>
        </Link>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="small"
          aria-label="open navigation"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;
