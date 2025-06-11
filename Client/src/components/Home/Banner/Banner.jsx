import React from "react";
import { BannerCard } from "./BannerCard";

export const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
                {/* left side */}
                <div className="md:w-1/2 space-y-8 h-full">
                    <h2 className="text-5xl font-bold leading-snug text-black">
                        Buy and Sell Books <span className="text-blue-500">for the best price</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim autem debitis consectetur alias numquam quasi sapiente ipsa doloribus veritatis dolorum, velit deserunt saepe voluptates maiores distinctio officiis earum a illum dignissimos eveniet. Non repellat sint incidunt,
                        qui quis earum illum ipsa voluptatum doloribus possimus deleniti dolorum magni quas alias! In explicabo, aperiam velit consequuntur obcaecati cumque corporis quis commodi quaerat?
                    </p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="search a book" className="py-2 px-2 bg-white rounded-s-sm outline-none" />
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 cursor-pointer">Search</button>
                    </div>
                </div>

                {/* right side */}
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    );
};
