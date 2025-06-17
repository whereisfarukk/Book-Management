import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import { SingleBook } from "../pages/SingleBook";
import { DashboardLayout } from "../pages/DashboardLayout";
import { UploadBook } from "../components/Admin-dashboard/UploadBook";
import { ManageBooks } from "../components/Admin-dashboard/ManageBooks";
import { EditBooks } from "../components/Admin-dashboard/EditBooks";
import { Dashboard } from "../components/Admin-dashboard/Dashboard";
import { SignUp } from "../pages/SignUp";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./guards/PrivateRoutes";
import { Logout } from "../pages/Logout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`),
            },
            {
                path: "/admin/dashboard",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/admin/dashboard",
                        element: (
                            <PrivateRoutes>
                                <Dashboard />
                            </PrivateRoutes>
                        ),
                    },
                    {
                        path: "/admin/dashboard/upload",
                        element: <UploadBook />,
                    },
                    {
                        path: "/admin/dashboard/manage",
                        element: <ManageBooks />,
                    },
                    {
                        path: "/admin/dashboard/edit-books/:id",
                        element: <EditBooks />,
                        loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`),
                    },
                ],
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/log-out",
                element: <Logout />,
            },
        ],
    },
]);

export default router;
