import { Link } from "react-router-dom";
import img from "../data/logo.jpg"
import styles from "../style/navBar.module.scss"

const NavBar = () => {
  return (
    <>
    <nav className={styles.nav1}>
    <a href="/">
        <img src={img} className={styles.img1}/>
    </a>
    <input className={styles.input1} ></input>
    <div className={styles.secdiv}>
    <button className={styles.btn}> 로그인 </button>
    <button className={styles.btn}> 회원가입 </button>
    </div>
    </nav>
    </>
  );
};

export default NavBar;