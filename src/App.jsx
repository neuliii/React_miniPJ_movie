import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import MovieDetail from './components/MovieDetail';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import Search from './components/Search';


function App() {

  return (
    <>

      <Routes>
        {/* 🔥 Layout이 모든 페이지의 공통 UI가 됨 */}
        {/* 1. 파일 경로 : / , 보여지는 화면 : Layout + Home */}
        {/* 2. 파일 경로 : /detail , 보여지는 화면 : Layout + detail */}
        <Route path="/" element={<Layout />}>
          {/* 🔽 index : 부모 라우트(path="/")의 기본 페이지를 설정 */}
          {/* <Route index element={<MovieSlider />} /> */}
          <Route index element={<MovieCard />} />
          {/* 🔽 url 파라미터명 id 로 설정 (id 값을 받아옴) */}
          <Route path="details/:id" element={<MovieDetail />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
