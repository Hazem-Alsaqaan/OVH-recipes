import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={RoutesApp} />
      </GoogleOAuthProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </StrictMode>
);
