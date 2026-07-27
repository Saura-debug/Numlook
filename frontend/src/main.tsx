import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";

import App from "./App";

import queryClient from "./lib/queryClient";

import { AuthProvider } from "./context/AuthContext";

import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);