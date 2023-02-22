//No page found
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import {routes} from "../routing";

const NoPage = () => {
    return (

        <div className="App">
            <header className="App-header">
                <p>
                    No page found. <Link to={routes[0].path}>Go to home</Link>
                </p>
            </header>
        </div>
    );
};

export default NoPage;