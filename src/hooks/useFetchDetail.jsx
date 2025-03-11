import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "https://api.themoviedb.org/3/movie/";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

const useFetchDetail= () => {
    // [ useNavigate ] : 메인으로 이동하는 버튼에 연결
    //                   특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용
    const { id } = useParams()
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_URL}${id}?language=ko`, {
                    method : "GET",
                    headers : {
                        accept : "application/json",
                        Authorization : `Bearer ${ACCESS_TOKEN}`,
                    },
                });
                if (!response.ok) {
                    throw new Error (`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
        // id가 변경되면 해당 아이디에 맞는 데이터를 리렌더링, 의존성배열 [id]
    }, [id])
    return {movie, loading, error}
}

export default useFetchDetail
