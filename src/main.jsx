import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import "./styles/layout.css";

import App from "./App";

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/typography.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <MDXProvider>
                <App />
            </MDXProvider>
        </BrowserRouter>
    </React.StrictMode>
);