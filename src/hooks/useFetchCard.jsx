import { useEffect, useState } from "react"

export const API_URL = "https://api.themoviedb.org/3"
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

const useFetchCard= () => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        // 함수를 async로 선언하면 자동으로 해당 함수가 비동기 함수 선언 , Promise 반환
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                // await는 비동기 작업이 끝날 때까지 기다려주는 역할
                const response = await fetch(`${API_URL}/movie/popular?language=ko`, {
                    // API 요청 방식(HTTP 메서드) 중 "GET": 서버에서 데이터를 조회하는 요청
                    method : "GET",
                    headers : {
                        // 응답을 JSON 형식으로 받고 싶다는 뜻
                        accept : "application/json",
                        // API에 접근할 수 있는 인증 토큰
                        // TMDB API는 인증이 필요한 API라서, Bearer 토큰을 넣어줘야 함
                        Authorization : `Bearer ${ACCESS_TOKEN}`,
                    },
                });
                // response 에 대한 응답이 실패 한다면 new Error 새로운 오류 객체를 생성 후 throw 를 이용하여 catch 블록으로 전달
                if (!response.ok) {
                    throw new Error (`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                // setMovie(data.results);
                setFilteredMovies(data.results.filter((movie) => !movie.adult));
              // try에서 오류가 발생시 catch 블록 실행
            } catch (err) {
                setError(err.message);
              // finally 블록은 성공하든 실패하든 무조건 실행, try와 catch가 끝난 후 무조건 실행되는 코드
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    }, [])
    return {filteredMovies, loading, error}
}

export default useFetchCard
