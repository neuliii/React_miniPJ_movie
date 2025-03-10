import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import movieListData from "../data/movieListData.json";

const MovieSlider = () => {
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    // ✅ 평점 높은 순으로 정렬
    const sorted = [...movieListData.results].sort((a, b) => b.vote_average - a.vote_average);
    setSortedMovies(sorted);
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={Math.min(3, sortedMovies.length)}  // ✅ 데이터 개수에 맞춰 조절
        centeredSlides={true}
        navigation
        loop={sortedMovies.length >= 3}  // ✅ 데이터가 충분할 때만 loop 활성화
        breakpoints={{
          768: { slidesPerView: Math.min(2, sortedMovies.length) },
          480: { slidesPerView: 1 },
        }}
      >
        {sortedMovies.map((movie) => (
          <SwiperSlide key={movie.id} className="transition-opacity duration-300">
            <div className="text-center p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-white mt-2">{movie.title}</h3>
              <p className="text-gray-300">평점: {movie.vote_average.toFixed(1)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;