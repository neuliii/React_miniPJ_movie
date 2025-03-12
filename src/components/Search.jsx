import { Link, useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MovieCard from "./MovieCard";
import styles from "../style/movieCard.module.scss"


export function Search (){
    const [searchParams] = useSearchParams();
    const params = searchParams.get("movie") || ""
  
    const { filterData, loading, error } = useSearch(params)
  
    // if (!params) return <p> 검색어 입력 필요 </p>
    if (loading) return <p>loading...</p>
    if (error) return <p>error : {error}</p>

    if (params.trim() === "") return <MovieCard />;
    
    return(
        <>
        <div className={styles.firdiv}>  
        {filterData.length > 0 ? (
          filterData.map((movieItem) => (
            <Link key={movieItem.id} to={`/details/${movieItem.id}`}>
              <div className={styles.secdiv}>
                <img
                  className={styles.img1}
                  src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}&language=ko`}
                  alt={movieItem.title}
                />
                <div className={styles.thrdiv}></div>
                <h3 className={styles.h3title}>{movieItem.title}</h3>
                <p className={styles.pvote}>
                  평점 {movieItem.vote_average.toFixed(1)}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white">검색 결과가 없습니다.</p>
        )}
      </div>
        </>
    )
}

export default Search;