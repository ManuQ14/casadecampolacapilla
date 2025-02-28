import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../../home/components/Header/styles/header.module.scss";

import logoHeader from "../../../assets/icons/logoHome.png";
import LogoHeaderScrolled from "../../../assets/icons/logoHomeScrolled.png";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/inicio");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleToLlegar = () => {
    navigate("/como-llegar");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleToReserve = () => {
    navigate("/contacto");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleToHistory = () => {
    navigate("/nuestra-historia");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  //Control de scroll para cambio de estado de la navBar
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 650px, activamos la clase
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Limpia el listener cuando el componente se desmonte
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logoDesktop}>
          <img
            src={scrolled ? LogoHeaderScrolled : logoHeader}
            alt="Logo Capilla"
            className={styles.imgLogoDesktop}
          />
        </div>
        <div
          className={`${styles.navigatonHeader} ${
            scrolled ? styles.navigatonHeaderScrolled : ""
          }`}
        >
          <div onClick={handleToHome} className={styles.itemOption}>
            Inicio
          </div>
          <div onClick={handleToHistory} className={styles.itemOption}>
            Nuestra historia
          </div>
          <div
            onClick={() => handleToLlegar("como-llegar")}
            className={styles.itemOption}
          >
            Cómo Llegar
          </div>
          <div onClick={handleToReserve} className={styles.itemOption}>
            Contacto
          </div>
        </div>
      </nav>
    </>
  );
};
