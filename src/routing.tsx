// this file will hold all the routes for the application

import React from "react";
import { BrowserRouter, Routes,  } from "react-router-dom";
import Home from "./views/Home";
import Project from "./views/Project";
import NoPage from "./views/NoPage";
import Experience from "./views/Experiences";
import AboutMe from "./views/AboutMe";

//json object
interface Route {
    
    name: string;
    path: string;
    element: JSX.Element;
    nav: boolean;
    
    
}

export const routes :Route[] = [
     {
        name: "home",
        path: "/",
        element: <Home />,
        nav: true,
    },
    {
        name: "projects",
        path: "/projects",
        element: <Project />,
        nav: true,
    },
    {
        name: "experience",
        path: "/experience",
        element: <Experience />,
        nav: true,
    },
    {
        name: "about-me",
        path: "/aboutme",
        element: <AboutMe />,
        nav: true,
    },
    {   

        name: "NoPage",
        path: "*",
        element: <NoPage />,
        nav: false,
    }
]

