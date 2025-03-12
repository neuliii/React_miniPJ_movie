import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { getRegExp } from "korean-regexp";

const API_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

const useSearch = (query) => {

    const [filterData, setFilterData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchDebounce = useDebounce(query)

    useEffect(() => {

        if(!searchDebounce){
            setFilterData([])
            return;
        }

        const searchFetch = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_URL}/search/movie?query=${searchDebounce}&language=ko`,{
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                        accept: "application/json",
                      },
                })
            

            if (!response.ok) throw new Error (" Error : API 요청 실패 ")

            const data = await response.json()

            console.log(data)

            const regex = getRegExp(searchDebounce, { initialSearch: true, fuzzy: true });
            const filtered =
            data.results?.filter((movie) => regex.test(movie.title)) || [];

            setFilterData(filtered);

        } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }


          searchFetch()
    },[searchDebounce])

    return { filterData, loading, error };
}

export default useSearch;