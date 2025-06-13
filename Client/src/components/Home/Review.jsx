import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import { Avatar } from "flowbite-react";

// import required modules
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

import profilePic from "../../assets/profilePic.jpg";

export const Review = () => {
    return (
        <div className="my-12 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border-gray-200">
                            <div className="space-y-6">
                                <div className="text-amber-500 flex gap-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <div className="mt-7">
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cupiditate, quos quam et nobis in molestiae ipsum fugit dolor tempore unde obcaecati, praesentium impedit, illo nostrum atque deserunt. Veniam, et.</p>
                                    <Avatar img={profilePic} alt="avatar of Jese" rounded className="w-10 mb-4" />
                                    <h5 className="text-lg font-medium">Mark Ping</h5>
                                    <p className="text-base">CEO, ABC Company</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
