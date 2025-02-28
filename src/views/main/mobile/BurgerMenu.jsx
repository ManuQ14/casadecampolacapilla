import { useState } from "react";
import { useNavigate } from "react-router-dom";

import openMenu from "../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";
import CapillaLogo from "../../../assets/icons/iconsBurguerMenu/LogoCapillaSVGMenuBurguer.svg";

import styles from "../../home/components/Header/styles/header.module.scss";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

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

  return (
    <>
      <img
        src={openMenu}
        alt="Abrir menú hamburguesa"
        onClick={toggleMenu}
        aria-label="Abrir menú hamburguesa"
        className={styles.menuHamburguesaButton}
      />
      {/*Menu hamburguesa */}
      <div
        className={`${styles.burgerMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <img
          src={closeMenu}
          alt="Cerrar menú"
          className={styles.closeMenu}
          onClick={toggleMenu}
          aria-label="Cerrar menú"
        />
        <nav className={styles.menuItems}>
          <img
            src={CapillaLogo}
            onClick={handleToHome}
            alt="Logo de La Capilla"
          />
          <div className={styles.itemsNavigationContainer}>
            <div onClick={handleToHome} className={styles.itemOption}>
              Inicio
            </div>
            <div onClick={handleToHistory} className={styles.itemOption}>
              Nuestra historia
            </div>
            <div onClick={handleToLlegar} className={styles.itemOption}>
              Cómo llegar
            </div>
            <div onClick={handleToReserve} className={styles.itemOption}>
              Contacto
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
