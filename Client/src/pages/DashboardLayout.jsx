import React from "react";
import { Outlet } from "react-router";
import { SideBar } from "../components/Admin-dashboard/Sidebar";

export const DashboardLayout = () => {
    return (
        <div className="flex gap-4 flex-col md:flex-row my-20">
            <SideBar />
            <Outlet />
        </div>
    );
};
