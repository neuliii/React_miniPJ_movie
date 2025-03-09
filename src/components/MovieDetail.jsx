import { useNavigate, useParams } from 'react-router-dom';
import movieListData from '../data/movieListData.json';
import MovieDetailData from '../data/movieDetailData.json';
import styles from "../style/movieDetail.module.scss"

const MovieDetail = () => {

  // Route path="details/:id" 에서 사용된 파라미터 명으로 useParams 호출
  const { id } = useParams();

  // 1. MoviCard 컴포넌트에서 <Link key={movie.id} to={`/details/${movie.id}`}> 이렇게 링크 걸어주었으니
  //    해당 카드를 누르면 url id 부분이 자동적으로 movie.id 가 들어가면서 그 아이디에 맞는 정보가 나온다.
  // 2. m.id는 숫자형인데, id는 문자열이니까 .toString()으로 변환
  const movie = movieListData.results.find((m) => m.id.toString() === id);

    const genres = movie.genre_ids
        .map((genreId) => {
        const genre = MovieDetailData.genres.find((g) => g.id === genreId);
        return genre ? genre.name : null; // 해당 장르 ID가 있으면 이름 반환
        })
        .filter((name) => name) // null 값 제거, .filter()는 true인 값만 남기고, false인 값(= falsy한 값 =null )을 제거하는 역할
        .join("/ "); // 슬래시로 구분해서 문자열로 변환


  // [ useNavigate ] : 메인으로 이동하는 버튼에 연결
  //                   특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용
  const navigate = useNavigate()


  return (
    <div className={styles.firdiv}>

      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[300px] h-[450px] " />

      <div className='w-1/3'>
        <div className={styles.titlediv}>
            <h1 className={styles.h1title}>{movie.title}</h1>
        </div>

        <div className={styles.secdiv}>
        <p className={styles.pcolor}>평점 : {movie.vote_average.toFixed(1)} </p>
        <p className={styles.pcolor}>장르 : {genres} </p>
        </div>

        <div className={styles.tirdiv}>
        <p className={styles.overview}>{movie.overview}</p>
        </div>

        {/* ✅ 메인으로 가는 버튼 */}
        <button 
            onClick={() => navigate('/')} 
            className={styles.button1}>
            MAIN 🪧
        </button>
      </div>
      
    </div>
  );
};

export default MovieDetail;

