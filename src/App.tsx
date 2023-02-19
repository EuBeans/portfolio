import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { theme } from './assets/theme';
import NavBar from './components/NavBar';
import {routes} from "./routing";
import  startTitleAnimation  from './utils/TitleAnimation';
function App() {
  const path = routes.home ?? routes.noPage;

  startTitleAnimation(path.name);
  const containerStyle = {
    backgroundColor: theme.palette.background.default,
  }
  return (
    <Box sx={containerStyle}>
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path="/portfolio" element={routes.home.element}/>
        <Route path="*" element={routes.noPage.element} />
      </Routes>
    </BrowserRouter>
    </Box>
  );
}

export default App;
