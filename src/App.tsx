import { Box, Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter, useRoutes} from "react-router-dom";
import './App.css';
import { theme } from './assets/theme';
import NavBar from './components/molecules/NavBar';
import {routes} from "./routing";
import  startTitleAnimation  from './utils/TitleAnimation';
import Cursor from "react-special-cursor";
import BackgroundArt from './components/molecules/BackgroundArt';
import ScrollToTop from './utils/ScrollToTop';
function App() {


  startTitleAnimation("Portfolio");
  const containerStyle = {
    backgroundColor: theme.palette.background.default,
    overflow: "hidden",
    position: "relative"
  }
  
  console.log("routes: ", routes);
  return (
    <Cursor borderClassName='cursorBorder'>
      <Box sx={containerStyle}>
        <BackgroundArt/>
        <Container maxWidth="lg">
          <NavBar/> 
          <ScrollToTop />
          <Routes>
            <Route path={routes[0].path} element={routes[0].element}/>
            <Route path={routes[1].path} element={routes[1].element}/>
            <Route path={routes[2].path} element={routes[2].element} />
            <Route path={routes[3].path} element={routes[3].element} />
            <Route path={routes[4].path} element={routes[4].element} />
          </Routes>
        </Container>
      </Box>
    </Cursor>
  );
}

export default App;
