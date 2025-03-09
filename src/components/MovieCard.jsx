import React from "react";
import { Link } from "react-router-dom";
import movieListData from "../data/movieListData.json";
import styles from "../style/movieCard.module.scss"

const MovieCard = () => {
  return (
    <div className={styles.firdiv}>
      {movieListData.results.map((movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return (
          // 링크의 감싸진 모든 요소 클릭 시 url 이동 (링크 이동)
          <Link key={movie.id} to={`/details/${movie.id}`}>
            <div className={styles.secdiv}>
              <img className={styles.img1} src={imageUrl} alt={movie.title} />
              <div className={styles.thrdiv}></div>
              <h3 className={styles.h3title}>{movie.title}</h3>
              <p className={styles.pvote}>평점 : {movie.vote_average.toFixed(1)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MovieCard;