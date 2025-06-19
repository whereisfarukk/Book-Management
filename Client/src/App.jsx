import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { MyFooter } from "./components/MyFooter";
function App() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <MyFooter />
            {/* using the toaster in root component so that its globally availabe everywhere */}
            <Toaster />
        </>
    );
}

export default App;
