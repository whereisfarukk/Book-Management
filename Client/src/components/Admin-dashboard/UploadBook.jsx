import React, { useRef, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export const UploadBook = () => {
    const formRef = useRef(null); // ✅ Ref for the form element

    const [formData, setFormData] = useState({
        authorName: "",
        imageURL: "",
        category: "",
        bookDescription: "",
        bookTitle: "",
        bookPDFURL: "",
    });
    const bookCategories = ["Fiction", "Non-Fiction", "Mistry", "Programming", "Science Fiction", "Fantasy", "Horror", "Bibliography", "Autobiography", "History", "Self-Help", "Memoir", "Business", "Children Books", "Travel", "Religion", "Art and Design"];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send formData to backend if needed
        fetch("http://localhost:3000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Book uploaded successfully!!!");
                formRef.current.reset(); // ✅ Reset form fields
                setFormData({
                    authorName: "",
                    imageURL: "",
                    category: "",
                    bookDescription: "",
                    bookTitle: "",
                    bookPDFURL: "",
                });
            })
            .catch(() => {
                alert("Something went wrong!");
            });
    };
    return (
        <div className="px-4 lg:pr-24 w-full">
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Upload A Book</h2>
            <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Book Title */}
                    <div>
                        <label htmlFor="bookTitle" className="block mb-1 font-medium text-gray-700">
                            Book Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="bookTitle"
                            name="bookTitle"
                            type="text"
                            value={formData.bookTitle}
                            onChange={handleChange}
                            required
                            placeholder="Enter book title"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Author Name */}
                    <div>
                        <label htmlFor="authorName" className="block mb-1 font-medium text-gray-700">
                            Author Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="authorName"
                            name="authorName"
                            type="text"
                            value={formData.authorName}
                            onChange={handleChange}
                            required
                            placeholder="Enter author name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="imageURL" className="block mb-1 font-medium text-gray-700">
                            Image URL
                        </label>
                        <input
                            id="imageURL"
                            name="imageURL"
                            type="url"
                            value={formData.imageURL}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block mb-1 font-medium text-gray-700">
                            Category
                        </label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="" disabled>
                                Select a category
                            </option>
                            {bookCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Book Description */}
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="bookDescription" className="block mb-1 font-medium text-gray-700">
                            Book Description
                        </label>
                        <textarea
                            id="bookDescription"
                            name="bookDescription"
                            value={formData.bookDescription}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Write a short description"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                        />
                    </div>

                    {/* Book PDF URL */}
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="bookPDFURL" className="block mb-1 font-medium text-gray-700">
                            Book PDF URL
                        </label>
                        <input
                            id="bookPDFURL"
                            name="bookPDFURL"
                            type="url"
                            value={formData.bookPDFURL}
                            onChange={handleChange}
                            placeholder="https://example.com/book.pdf"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition-colors">
                            Upload Book Info
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
