import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const root = document.getElementById("root");

// Check if createRoot is available (React 17+)
const rootElement = ReactDOM.unstable_createRoot
  ? ReactDOM.unstable_createRoot(root)
  : ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
