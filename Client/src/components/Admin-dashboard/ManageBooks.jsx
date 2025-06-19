import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router";

export const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
    });
    // delete a book
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/book/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((data) => {
                alert("book is deleted successfully!!!");
                setAllBooks((prev) => prev.filter((book) => book._id !== id));
            });
    };
    return (
        <div className="w-full mr-24">
            <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
            <div className="w-full">
                <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">No.</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Book Name</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Author Name</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Category</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Prices</th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Edit or Manage</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm text-gray-600 divide-y divide-gray-200">
                        {allBooks.map((book, index) => (
                            <tr key={book._id}>
                                <td className="py-4 px-4">{index}</td>
                                <td className="py-4 px-4">{book.bookTitle}</td>
                                <td className="py-4 px-4">{book.authorName}</td>
                                <td className="py-4 px-4">{book.category}</td>
                                <td className="py-4 px-4">$10.99</td>
                                <td className="py-4 px-4">
                                    <div className="flex gap-2">
                                        <Link className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer" to={`/admin/dashboard/edit-books/${book._id}`}>
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(book._id)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 cursor-pointer">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
