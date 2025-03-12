import { Link, useNavigate } from "react-router-dom";
import img from "../data/logo.png"
import img2 from "../data/logo2.png"
import styles from "../style/navBar.module.scss"
import { useEffect, useState } from "react";

const NavBar = () => {

  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useState(true)

  const toggleBtn = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);



  return (
    <>
    <nav className={`${darkMode ? styles.nav1 : styles.light}`}>
    <Link to={'/'}>
        <img src={`${darkMode ? img : img2}`} className={styles.img1}/>
    </Link>
    <div className={styles.firdiv}>
    <input className={`${darkMode ? styles.input1 : styles.input2}`}
    onChange={(e) => {navigate(`/search?movie=${e.target.value}`)}}></input>
    </div>
    <div className={styles.secdiv}>
    <button className={`${darkMode ? styles.btn2 : styles.btn3}`}> 로그인 </button>
    <button className={`${darkMode ? styles.btn2 : styles.btn3}`}> 회원가입 </button>
    <button className={`${darkMode ? styles.btn2 : styles.btn3}`}
    onClick={toggleBtn}> {darkMode ? "LIGHT" : "DARK"} </button>
    </div>
    </nav>
    </>
  );
};

export default NavBar;