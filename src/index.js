import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FolderContextProvider from "./context/folderContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <FolderContextProvider>
      <Router basename="/note">
        <App />
      </Router>
    </FolderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
