import React from "react";
import favBooksPoster from "../../assets/favouriteBooks.jpg";
import { Link } from "react-router";
export const FavouriteBooks = () => {
    return (
        <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
                <img src={favBooksPoster} alt="" className="rounded md:w-10/12" />
            </div>
            <div className="md:w-1/2 space-y-6">
                <h2 className="text-5xl font-bold md:w-3/4 leading-snug">
                    Find Your Favourite <span className="text-blue-700">Book Here!</span>
                </h2>
                <p className="mb-10 text-lg md:w-5/6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate provident aspernatur eligendi harum maxime error officiis, mollitia officia, voluptatem vero natus ex deserunt, commodi magnam rerum iste quae asperiores tempore reiciendis ipsa possimus laudantium amet eos
                    iusto! Quod est quasi cum deserunt illo veritatis nostrum eos quisquam odio ducimus. Magnam?
                </p>
                {/* stats */}
                <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
                    <div>
                        <h3 className="text-3xl font-bold">800+</h3>
                        <p className="text-base">Book Listing</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">550+</h3>
                        <p className="text-base">Register Users</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">1200+</h3>
                        <p className="text-base">PDF Downloads</p>
                    </div>
                </div>
                <Link to="/shop" className="mt-8 block">
                    <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 cursor-pointer">Explore More</button>
                </Link>
            </div>
        </div>
    );
};
