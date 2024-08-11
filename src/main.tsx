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
      <GoogleOAuthProvider clientId="381438557980-3goklvqpdvm1al3ua45ja65uq3jm00kj.apps.googleusercontent.com">
        <RouterProvider router={RoutesApp} />
      </GoogleOAuthProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </StrictMode>
);
