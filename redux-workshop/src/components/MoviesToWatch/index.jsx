import React from "react";
// Import Swiper React components
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from "../MovieCard";
// import required modules

export default function MoviesToWatch() {
	const Movies = useSelector((state) => state.movies)
	return (
		<>
			<h1>Your list</h1>
			<Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Movies.map(
					(movie) => 
					movie.watched && (
                    <SwiperSlide>
                        <MovieCard {...movie} type="mylist" />
                    </SwiperSlide>
                ))}
            </Swiper>
		</>
	)
}
