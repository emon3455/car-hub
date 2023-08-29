"use client"

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';


const reviews = [
    {
        "_id": "1a2b3c4d5e6f",
        "name": "Emon",
        "details": "I've had a great experience with this car website. The information provided was very informative, and I was able to find the perfect car for my needs. The website's design is user-friendly too.",
        "rating": 4.7,
        "image": "https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
    },
    {
        "_id": "2b3c4d5e6f7a",
        "name": "Emily Smith",
        "details": "This website made my car shopping experience so much easier. The search filters helped me narrow down my choices, and the reviews from other users were very helpful. I highly recommend it.",
        "rating": 4.5,
        "image": "https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
    },
    {
        "_id": "3c4d5e6f7a8b",
        "name": "Ariyan Emon",
        "details": "I encountered a wide variety of car options on this website. However, the lack of detailed specifications for some models was a bit disappointing. Overall, it's a decent platform for exploring cars.",
        "rating": 3.2,
        "image": "https://i.ibb.co/jw2Z9R8/emon11.png"
    },
    {
        "_id": "4d5e6f7a8b9c",
        "name": "Sophia Williams",
        "details": "I had a seamless experience from browsing to purchasing through this website. The payment process was secure, and I received timely updates on my purchase. Definitely worth considering.",
        "rating": 4.8,
        "image": "https://xsgames.co/randomusers/assets/avatars/male/46.jpg"
    },
    {
        "_id": "5e6f7a8b9c1d",
        "name": "Daniel Brown",
        "details": "I found the website's interface a bit confusing to navigate. The layout could be improved for better user experience. However, the range of cars available is impressive.",
        "rating": 3.0,
        "image": "https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
    }
];

console.log(reviews);


const Reviews = () => {
    return (
        <div id='reviews' className='p-2 my-20 w-full md:w-4/5 mx-auto'>

            <h2 className="text-xl my-5 pl-2 font-bold border-l-4 border-red-500">
                What Our Clients Say
            </h2>

            <div className="rounded-md p-4 shadow-lg shadow-violet-400/50">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center w-4/5 mx-auto space-y-4">
                                <div className="">
                                    <Image src={review.image} width={70} height={70} alt="cars image" className='rounded-full mx-auto' />
                                </div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-center">
                                    {review.details}
                                </p>
                                <h3 className="text-xl font-bold">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;