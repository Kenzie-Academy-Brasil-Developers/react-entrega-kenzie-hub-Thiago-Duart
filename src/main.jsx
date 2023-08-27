import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/ProfileContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TechProvider } from "./providers/ProfileTechContext.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TechProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </TechProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
