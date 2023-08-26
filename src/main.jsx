import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./providers/LoginContext.jsx";
import { UserProvider } from "./providers/userContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
