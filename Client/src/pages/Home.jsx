import React from "react";
import { Banner } from "../components/Home/Banner/Banner";
import BestSellerBooks from "../components/Home/BestSellerBooks";
import { FavouriteBooks } from "../components/Home/FavouriteBooks";
import { PromoBanner } from "../components/Home/PromoBanner";

export default function Home() {
    return (
        <div>
            <Banner />
            <BestSellerBooks />
            <FavouriteBooks />
            <PromoBanner />
        </div>
    );
}
