import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/movieCard.module.scss"
// import MovieSlider from "../components/MovieSlider.jsx";
import useFetchCard from "../hooks/useFetchCard.jsx";


const MovieCard = () => {

  const { filteredMovies, loading, error } = useFetchCard()


  if (loading) return <p>loading...</p>
  if (error) return <p>error : {error}</p>



  return (
    <>
    <div className={styles.firdiv}>
      {/* <MovieSlider /> */}
      {filteredMovies
      .map((movieItem) => (
        <Link key={movieItem.id} to={`/details/${movieItem.id}`}>
          <div className={styles.secdiv}>
            <img className={styles.img1} src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`} alt={movieItem.title} />
            <div className={styles.thrdiv}></div>
            <h3 className={styles.h3title}>{movieItem.title}</h3>
            <p className={styles.pvote}>평점 : {movieItem.vote_average.toFixed(1)}</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default MovieCard;