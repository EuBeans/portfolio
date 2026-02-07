import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import { theme } from './assets/theme';
import NavBar from './components/molecules/NavBar';
import {routes} from "./routing";
import  startTitleAnimation  from './utils/TitleAnimation';
import BackgroundArt from './components/molecules/BackgroundArt';
import ScrollToTop from './utils/ScrollToTop';
import TerminalPanel from './components/molecules/TerminalPanel';
function App() {
  useEffect(() => startTitleAnimation("Portfolio"), []);

  const containerStyle = {
    backgroundColor: theme.palette.background.default,
    overflow: "hidden",
    position: "relative"
  }
  
  return (
      <Box sx={containerStyle}>
        <TerminalPanel
          title="~/portfolio"
          headerContent={<NavBar />}
          backgroundContent={<BackgroundArt />}
        >
          <ScrollToTop />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </TerminalPanel>
      </Box>
  );
}

export default App;
