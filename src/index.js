import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./assets/styles/Global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);