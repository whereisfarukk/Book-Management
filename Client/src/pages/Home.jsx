import React from "react";
import { Banner } from "../components/Home/Banner/Banner";
import BestSellerBooks from "../components/Home/BestSellerBooks";
import { FavouriteBooks } from "../components/Home/FavouriteBooks";
import { PromoBanner } from "../components/Home/PromoBanner";
import { OtherBooks } from "../components/Home/OtherBooks";
import { Review } from "../components/Home/Review";

export default function Home() {
    return (
        <div>
            <Banner />
            <BestSellerBooks />
            <FavouriteBooks />
            <PromoBanner />
            <OtherBooks />
            <Review />
        </div>
    );
}
