import React, { useContext, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router";
import { Loader } from "../components/Ui/Loader";

export default function Shop() {
    const [books, setBooks] = useState([]);
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            });
    }, []);
    if (loading) return <Loader />;
    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">All Books are here</h2>
            <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {books.map((book) => (
                    <Card className="max-w-sm" key={book._id}>
                        <img src={book.imageURL} alt="" className="h-96 bg-cover" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.bookTitle}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to={book.bookPDFURL} className="bg-blue-500 font-semibold text-white text-center py-2 rounded cursor-pointer">
                            Buy Now
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
