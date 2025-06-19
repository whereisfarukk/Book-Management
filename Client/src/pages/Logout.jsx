import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router";

export const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                alert("Sign out successfull!!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                // An error happened.
            });
    };
    return (
        <div className="mt-28 px-4flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-center ">
            <button
                onClick={handleLogout}
                class="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
            >
                Button Red
            </button>
        </div>
    );
};
