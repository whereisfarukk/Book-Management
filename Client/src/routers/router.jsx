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
                        element: <Dashboard />,
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
        ],
    },
]);

export default router;
