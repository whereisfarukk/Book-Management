import { useState } from "react";
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
        </>
    );
}

export default App;
