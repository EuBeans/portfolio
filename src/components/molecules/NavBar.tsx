import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {theme} from '../../assets/theme';
import Link  from '@mui/material/Link';
import "../../App.css";
import { Drawer, List, ListItem, Popover, Typography } from '@mui/material';
import {
  Link as RouterLink,
} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {routes} from "../../routing";
import { useLocation, useNavigate } from 'react-router-dom';
import { contactLinks } from '../../const/constants';

type NavShortcutKey = "h" | "p" | "e" | "a" | "d";

interface ShortcutDefinition {
  key: NavShortcutKey;
  path: string;
  label: string;
  command: string;
}

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [shortcutsOpen, setShortcutsOpen] = React.useState(false);
  const [shortcutsAnchorEl, setShortcutsAnchorEl] = React.useState<HTMLElement | null>(null);
  const [gSequenceArmed, setGSequenceArmed] = React.useState(false);
  const shortcutTimerRef = React.useRef<number | undefined>(undefined);

  const location = useLocation();
  const navigate = useNavigate();
  const navRoutes = routes.filter((route) => route.nav);

  const shortcuts: ShortcutDefinition[] = React.useMemo(() => ([
    { key: "h", path: "/", label: "home", command: "/home" },
    { key: "p", path: "/projects", label: "projects", command: "/projects" },
    { key: "e", path: "/experience", label: "experience", command: "/experience" },
    { key: "a", path: "/aboutme", label: "about-me", command: "/aboutme" },
    { key: "d", path: "/demos", label: "demos", command: "/demos" },
  ]), []);

  const styleSpecChar = {
    color: theme.palette.text.special, 
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.h5.fontWeight,
    letterSpacing: theme.typography.h5.letterSpacing, 
    fontSize: theme.typography.h5.fontSize,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };

  const navIconStyle = {
    color: theme.palette.text.secondary,
    fontSize: '22px',
    '&:hover': {
      color: theme.palette.text.hover,
    },
  };

  const styleNavLink = {
    my: 2,
    mx: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
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
  };

  const clearShortcutSequence = React.useCallback(() => {
    setGSequenceArmed(false);
    if (shortcutTimerRef.current) {
      window.clearTimeout(shortcutTimerRef.current);
      shortcutTimerRef.current = undefined;
    }
  }, []);

  const armShortcutSequence = React.useCallback(() => {
    clearShortcutSequence();
    setGSequenceArmed(true);
    shortcutTimerRef.current = window.setTimeout(() => {
      clearShortcutSequence();
    }, 1200);
  }, [clearShortcutSequence]);

  const getDefaultShortcutAnchor = React.useCallback(() => {
    const headerActions = document.querySelector(".terminal-actions");
    return headerActions instanceof HTMLElement ? headerActions : null;
  }, []);

  const openShortcutsPopover = React.useCallback((anchor?: HTMLElement | null) => {
    setShortcutsAnchorEl(anchor ?? getDefaultShortcutAnchor());
    setShortcutsOpen(true);
  }, [getDefaultShortcutAnchor]);

  const closeShortcutsPopover = React.useCallback(() => {
    setShortcutsOpen(false);
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget = !!target && (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      );

      if (isTypingTarget) {
        return;
      }

      const key = event.key.toLowerCase();
      if (event.key === "Escape") {
        clearShortcutSequence();
        closeShortcutsPopover();
        return;
      }

      if (event.key === "?") {
        event.preventDefault();
        openShortcutsPopover();
        return;
      }

      if (gSequenceArmed) {
        const shortcut = shortcuts.find((item) => item.key === key);
        clearShortcutSequence();
        if (shortcut) {
          event.preventDefault();
          setDrawerOpen(false);
          navigate(shortcut.path);
        }
        return;
      }

      if (key === "g") {
        event.preventDefault();
        armShortcutSequence();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [
    armShortcutSequence,
    clearShortcutSequence,
    closeShortcutsPopover,
    gSequenceArmed,
    navigate,
    openShortcutsPopover,
    shortcuts
  ]);

  React.useEffect(() => {
    return () => clearShortcutSequence();
  }, [clearShortcutSequence]);
  
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const renderRouteLabel = (routeName: string, isActive: boolean) => (
    <>
      {isActive && <span className="terminal-command-muted">[active]</span>}
      <span style={styleSpecChar}>#</span>
      <span>{routeName}</span>
    </>
  );

  const list = () => (
    <Box
      sx={{ width: 250, height:"100%" , backgroundColor: theme.palette.background.default }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navRoutes.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <ListItem key={route.name} >
                  <Link
                    component={RouterLink}
                    to={route.path}
                    variant="body2"
                    onClick={toggleDrawer(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`terminal-nav-link${isActive ? " terminal-nav-link--active" : ""}`}
                    sx={[
                      styleNavLink,
                      {
                        color: isActive ? theme.palette.text.hover : theme.palette.text.secondary,
                      },
                    ]}
                  >
                    {renderRouteLabel(route.name, isActive)}
                  </Link>
            </ListItem>
          );
        })}
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
        {navRoutes.map((route) => {
          const isActive = location.pathname === route.path;
          return (
            <Link
              key={route.name}
              component={RouterLink}
              to={route.path}
              variant="body2"
              onClick={toggleDrawer(false)}
              aria-current={isActive ? "page" : undefined}
              className={`terminal-nav-link${isActive ? " terminal-nav-link--active" : ""}`}
              sx={[
                styleNavLink,
                {
                  color: isActive ? theme.palette.text.hover : theme.palette.text.secondary,
                },
              ]}
            >
              {renderRouteLabel(route.name, isActive)}
            </Link>
          );
        })}
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '8px' }}>
        <Link href={contactLinks.github} sx={navIconStyle} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon sx={{width:"80%"}}/>
        </Link>
        <Link href={contactLinks.email} sx={navIconStyle} aria-label="Email">
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
          className="terminal-focus-target"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Popover
        open={shortcutsOpen}
        anchorEl={shortcutsAnchorEl}
        onClose={closeShortcutsPopover}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        PaperProps={{ className: "terminal-popover terminal-popover--footer" }}
      >
        <Box sx={{ padding: "10px 12px", minWidth: "210px" }}>
          <Typography className="terminal-command-muted">keyboard shortcuts</Typography>
          <Box className="terminal-stdout" sx={{ marginTop: "8px" }}>
            <span className="terminal-command-line"><span className="terminal-command-muted">/help</span><span>open this panel</span></span>
            {shortcuts.map((shortcut) => (
              <span key={shortcut.key} className="terminal-command-line">
                <span className="terminal-command-muted">{shortcut.command}</span>
                <span>{shortcut.label}</span>
              </span>
            ))}
            <span className="terminal-command-line"><span className="terminal-command-muted">Esc</span><span>close panel</span></span>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
export default ResponsiveAppBar;
