import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/Home';
import NoPage from './views/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
