import { Link } from "react-router-dom";
import img from "../data/logo.jpg"
import styles from "../style/navBar.module.scss"

const NavBar = () => {
  return (
    <>
    <nav className={styles.nav1}>
    <Link to={'/'}>
        <img src={img} className={styles.img1}/>
    </Link>
    <div className={styles.firdiv}>
    <input className={styles.input1}></input>
    <button className={styles.btn1}> 🔍 </button>
    </div>
    <div className={styles.secdiv}>
    <button className={styles.btn2}> 로그인 </button>
    <button className={styles.btn2}> 회원가입 </button>
    </div>
    </nav>
    </>
  );
};

export default NavBar;