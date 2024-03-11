import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieContextProvider from "./Context/MovieContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import IconContextProvider from "./Context/IconContextProvider.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MovieContextProvider>
        <IconContextProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </IconContextProvider>
      </MovieContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
