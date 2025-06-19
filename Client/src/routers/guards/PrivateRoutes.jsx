import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { Loader } from "../../components/Ui/Loader";

export const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader />;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};
