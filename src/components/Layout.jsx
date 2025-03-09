import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "../style/navBar.module.scss"

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main className={styles.main1}>
      {/* <Outlet />이 있는 자리에 라우트에 따라 달라지는 컴포넌트가 들어감 */}
      {/* ⭐ 여기서 Outlet이 하위 컴포넌트를 렌더링해줌 */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;