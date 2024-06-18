import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LabelProvider } from "./labelDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StrictMode>
      <LabelProvider>
        <App />
      </LabelProvider>
    </StrictMode>
  </React.StrictMode>
);
