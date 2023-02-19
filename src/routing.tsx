// this file will hold all the routes for the application

import React from "react";
import { BrowserRouter, Routes,  } from "react-router-dom";
import Home from "./views/Home";
import NoPage from "./views/NoPage";

//json object
export const routes = {
    home: {
        name: "Home",
        path: "/portfolio",
        element: <Home />
    },
    noPage: {
        name: "NoPage",
        path: "*",
        element: <NoPage />
    }
}

