import { createHashRouter } from "react-router-dom";
import Layout from "./Layout";
import FavoritesPage from "../pages/FavoritesPage";
import IndexPage from "../pages/home-page/IndexPage";
import SearchPage from "../pages/home-page/SearchPage";
import LayoutHomePage from "../pages/home-page/LayoutHomPage";
import LoginPage from "../pages/LoginPage";
import RequiredAuth from "../components/RequiredAuth";
import DetailsMealPage from "../pages/DetailsMealPage";

const RoutesApp = createHashRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LayoutHomePage />,
        children: [
          { index: true, element: <IndexPage /> },
          { path: "/search", element: <SearchPage /> },
        ],
      },
      { path: "/details/:id", element: <DetailsMealPage /> },
      {
        path: "/favorites",
        element: (
          <RequiredAuth>
            <FavoritesPage />
          </RequiredAuth>
        ),
      },
    ],
  },
]);

export default RoutesApp;
