import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./components/static/Auth";
import { Landing } from "./components/static/Landing";
import { Dashboard } from "./components/static/Dashboard";
import { PrivateRoute } from "./components/shared/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/login",
    element: <Auth/>
  },
  {
    <PrivateRoute>
    path: "/dashboard",
    element: <Dashboard/>
    </PrivateRoute>

  }
]);
