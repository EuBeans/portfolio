import { Box, Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { theme } from './assets/theme';
import NavBar from './components/NavBar';
import {routes} from "./routing";
import  startTitleAnimation  from './utils/TitleAnimation';
import Cursor from "react-special-cursor";
import BackgroundArt from './components/BackgroundArt';
function App() {
  const path = routes.home ?? routes.noPage;

  startTitleAnimation(path.name);
  const containerStyle = {
    backgroundColor: theme.palette.background.default,
    overflow: "hidden",
    position: "relative"
  }
  

  return (
    <Cursor borderClassName='cursorBorder'>
      <Box sx={containerStyle}>
        <BackgroundArt/>
        <Container maxWidth="lg">
        <BrowserRouter>
          <NavBar/> 
          <Routes>
            <Route path="/home" element={routes.home.element}/>
            <Route path="*" element={routes.noPage.element} />
          </Routes>
        </BrowserRouter>
        </Container>
      </Box>
    </Cursor>
  );
}

export default App;
