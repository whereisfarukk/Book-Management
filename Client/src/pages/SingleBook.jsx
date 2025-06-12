import React from "react";
import { useLoaderData } from "react-router";

export const SingleBook = () => {
    const { _id, bookTitle } = useLoaderData();
    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2>{bookTitle}</h2>
        </div>
    );
};
