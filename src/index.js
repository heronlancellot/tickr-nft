import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
