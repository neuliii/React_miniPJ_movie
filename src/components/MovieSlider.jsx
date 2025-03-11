// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// // import styles from "../style/movieSlider.module.scss"

// import "swiper/css";
// import "swiper/css/navigation";


// const MovieSlider = () => {
//   const [sortedMovies, setSortedMovies] = useState([]);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // ✅ 평점 높은 순으로 정렬
//     const sorted = [...sortedMovies.results].sort((a, b) => b.vote_average - a.vote_average);
//     setSortedMovies(sorted);
//   }, []);

//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.update(); // ✅ Swiper 업데이트 트리거
//     }
//   }, [sortedMovies]);

//   return (
//     <>
//     <h1 className="text-white text-4xl mb-4"> 인기순 </h1>
//     <div className="relative w-full px-[250px] mb-[50px]">
//       <Swiper
//       ref={swiperRef}
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={10}
//         slidesPerView={Math.min(5, sortedMovies.length)}  // ✅ 데이터 개수에 맞춰 조절
//         centeredSlides={false}
//         navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // ✅ Swiper 기본 버튼 제거 & 커스텀 버튼 연결
//         loop={sortedMovies.length >= 5}  // ✅ 데이터가 충분할 때만 loop 활성화
//         breakpoints={{
//           768: { slidesPerView: Math.min(2, sortedMovies.length) },
//           480: { slidesPerView: 1 },
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//       >
//         {sortedMovies.map((movie) => (
//           <SwiperSlide
//             key={movie.id}
//             className="transition-opacity duration-300"
            
//           >
//             <div className="text-center p-4 ">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-[300px] object-cover rounded-lg"
//                 // style={{ width: "100%" }} // ✅ 이미지 높이 100% 맞추기
//               />
//               <h3 className="text-white mt-2">{movie.title}</h3>
//               {/* <p className="text-gray-300">평점: {movie.vote_average.toFixed(1)}</p> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* ✅ 커스텀 네비게이션 버튼 */}
//       <button className="custom-prev absolute left-[100px] top-1/2 transform -translate-y-1/2 text-white text-6xl z-10">
//         ❮
//       </button>
//       <button className="custom-next absolute right-[100px] top-1/2 transform -translate-y-1/2 text-white text-6xl z-10">
//         ❯
//       </button>
//     </div>
//     </>
//   );
// };

// export default MovieSlider;