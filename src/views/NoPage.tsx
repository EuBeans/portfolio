//No page found
import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const NoPage = () => {
    return (

        <div className="App">
            <header className="App-header">
                <p>
                    No page found. <Link to="/">Go to home</Link>
                </p>
            </header>
        </div>
    );
};

export default NoPage;