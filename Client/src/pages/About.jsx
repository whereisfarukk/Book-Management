import React from "react";

export const About = () => {
    return (
        <section class="mt-28 px-4 lg:px-24">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-extrabold text-gray-900 mb-8">About Us</h2>
                <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                    Welcome to <strong class="text-blue-600">Book-Management WebApp</strong>, your ultimate solution for organizing and managing your personal or professional library. Whether you're an avid reader, a librarian, or someone who loves keeping track of their books, our web app is
                    designed to simplify your life.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">User-Friendly Interface</h3>
                    <p class="text-gray-700">Our intuitive interface ensures that anyone can use the app without any hassle.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Advanced Search</h3>
                    <p class="text-gray-700">Find any book in seconds using our powerful search functionality.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                    <h3 class="text-xl font-bold text-blue-600 mb-4">Custom Tags & Categories</h3>
                    <p class="text-gray-700">Organize your books exactly how you want with custom tags and categories.</p>
                </div>
            </div>

            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 mb-12">
                <h3 class="text-3xl font-bold text-gray-900 text-center mb-6">Our Mission</h3>
                <p class="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                    At <strong class="text-blue-600">Book-Management WebApp</strong>, we believe that managing your library should be as enjoyable as reading itself. Our mission is to provide an intuitive, efficient, and secure platform where users can effortlessly organize, categorize, and track
                    their books. We strive to make book management seamless, so you can focus on what truly matters—reading!
                </p>
            </div>

            <div class="text-center">
                <h4 class="text-2xl font-bold text-gray-900 mb-4">What Our Users Say</h4>
                <blockquote class="text-lg text-gray-700 italic max-w-2xl mx-auto">"This app has completely transformed how I manage my library. It's simple, elegant, and incredibly powerful!"</blockquote>
                <p class="text-gray-600 mt-2">- Sarah L., Happy User</p>
            </div>
        </section>
    );
};
