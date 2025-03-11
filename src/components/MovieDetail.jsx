import { useNavigate } from 'react-router-dom';
import styles from "../style/movieDetail.module.scss"
import useFetchDetail from '../hooks/useFetchDetail';


const MovieDetail = () => {
  // [ useNavigate ] : 메인으로 이동하는 버튼에 연결
  //                   특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용
  const navigate = useNavigate()


  const { movie, loading, error } = useFetchDetail()

  if (loading) return <p>loading...</p>
  if (error) return <p>error : {error}</p>


  return (
    <div className={styles.firdiv}>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className={styles.img1} />

      <div className='w-1/3'>
        <div className={styles.titlediv}>
            <h1 className={styles.h1title}>{movie.title}</h1>
        </div>

        <div className={styles.secdiv}>
        <p className={styles.pcolor}>평점 : {movie.vote_average.toFixed(1)} </p>
        <ul> {movie.genres.map((genre) =>  <li className={styles.list}> {genre.name} </li> )} </ul>
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

