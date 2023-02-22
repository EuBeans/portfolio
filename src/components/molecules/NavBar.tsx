import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {theme} from '../../assets/theme';
import Link  from '@mui/material/Link';
import "../../App.css"
import { Drawer, Grid, List, ListItem, ListItemIcon,  } from '@mui/material';
import Typical from 'react-typical';
import {
  Link as RouterLink,
} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// for the json object routes, get the name of each route
import {routes} from "../../routing"
import { useLocation } from 'react-router-dom'

const GITHUBLINK = "https://github.com/EuBeans"
const EMAILLINK = "mailto:jeansfeir@hotmail.ca"


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

  const mediaStyleBox = {
    position : 'fixed',
    top: '0px',
    left: '0px',
    maxWidth: '40px',
    height: '365px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 1,
  }

  const mediaLineStyle ={
    border : '1px solid',
    borderLeft: 'none',
    borderTop: 'none',
    borderBottom: 'none',
    borderColor: theme.palette.background.special,
    height: '300px',
    width: '2px',
    position: 'fixed',
    top: '0px',
    left:  '15px',
    zIndex: 1,
  }

  const mediaIconStyle = {
    color: theme.palette.text.secondary,
    fontSize: '30px',
    marginTop: '-13px',
    left:  '15px',
    '&:hover': {
      color: theme.palette.text.hover,
    },
  }

  const mediaIconBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '7px',
    alignItems: 'center',
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
              <RouterLink
                    to={route.path}
                    style={{ textDecoration: "none" }}
                  >
                    <Link
                      href={route.path}
                      component="button"
                      variant="body2"
                      key={route.path}
                      onClick={toggleDrawer(false)}
                      sx={[styleNavLink,{color: location.pathname === route.path ? theme.palette.text.hover : theme.palette.text.secondary}]}
                    >
                    <span style={ styleSpecChar}>#</span>{route.name}
                </Link>
                </RouterLink>
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <>

      <AppBar position="fixed" sx={{backgroundColor:theme.palette.background.default, boxShadow:'none'}}>
        <Grid 
          container     
          direction="column-reverse"
          sx={mediaStyleBox}> 
          <Grid item sx={mediaLineStyle}/>
          <Grid item sx={mediaIconBoxStyle} direction="column">
            <Link href={GITHUBLINK} sx={mediaIconStyle} >
              <GitHubIcon sx={{width:"80%"}}/>
            </Link>
            <Link href={EMAILLINK} sx={mediaIconStyle} >
              <EmailIcon sx={{width:"80%"}}/>
            </Link>
          </Grid>
        </Grid>
        
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
                fontFamily: theme.typography.fontFamily2,
                fontSize: theme.typography.h1.fontSize,
                fontWeight: theme.typography.h1.fontWeight,
                letterSpacing: theme.typography.h1.letterSpacing,
                color: theme.palette.text.special,
                textDecoration: 'none',
              }}
            >
            
                <Typical
                    steps={[500, `"Jean"`, 4000,`"JP"`, 4000, `"Jean Pierre"`,4000]}
                    loop={Infinity}
                    wrapper="span"
                  />
            
            </Typography>
            <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              {routes.map((route) => (
                route.nav &&
                <RouterLink
                  to={route.path}
                  style={{ textDecoration: "none" }}
                >
                  <Link
                    href={route.path}
                    component="button"
                    variant="body2"
                    key={route.path}
                    onClick={toggleDrawer(false)}
                    sx={[styleNavLink,{color: location.pathname === route.path ? theme.palette.text.hover : theme.palette.text.secondary}]}
                  >
                  <span style={ styleSpecChar}>#</span>{route.name}
              </Link>
                </RouterLink>
                
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
    </>
  );
}
export default ResponsiveAppBar;