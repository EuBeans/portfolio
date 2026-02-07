import React from "react";
import Home from "./views/Home";
import Project from "./views/Project";
import NoPage from "./views/NoPage";
import Experience from "./views/Experiences";
import AboutMe from "./views/AboutMe";
import Demos from "./views/Demos";

export interface RouteConfig {
    name: string;
    path: string;
    element: JSX.Element;
    nav: boolean;
}

export const routes: RouteConfig[] = [
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
        name: "demos",
        path: "/demos",
        element: <Demos />,
        nav: true,
    },
    {   
        name: "NoPage",
        path: "*",
        element: <NoPage />,
        nav: false,
    }
];
