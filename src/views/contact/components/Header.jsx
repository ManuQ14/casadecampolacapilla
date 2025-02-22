import styles from "../styles/contact.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import subrayLine from "../../../assets/icons/subrayWhite.svg";
import openMenu from "../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import CapillaLogo from "../../../assets/icons/iconsBurguerMenu/LogoCapillaSVGMenuBurguer.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const handleToCamping = () => {
    navigate("/inicio#camping");
    document.body.classList.remove("no-scroll");
  };

  const handleToHistory = () => {
    navigate("/nuestra-historia");
    document.body.classList.remove("no-scroll");
  };

  const handleToServices = () => {
    navigate("/inicio#servicios");
    document.body.classList.remove("no-scroll");
  };

  const handleToGalery = () => {
    navigate("/galeria");
    document.body.classList.remove("no-scroll");
  };

  const handleToTarifas = () => {
    navigate("/inicio#tarifas");
    document.body.classList.remove("no-scroll");
  };

  const handleToLlegar = () => {
    navigate("/inicio#llegar");
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className={styles.reserveSection}>
      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          {/*  <img src={fotoHistory} className={styles.headerHistory} /> */}

          <div className={styles.contentHeader}>
            <h1 className={styles.h1History}>Reservar</h1>
            <img src={subrayLine} alt="" />
          </div>
        </div>

        <img
          src={openMenu}
          alt="Abrir menú hamburguesa"
          onClick={toggleMenu}
          aria-label="Abrir menú hamburguesa"
        />
        {/*Menu hamburguesa */}
        <div
          className={`${styles.burgerMenu} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <img
            src={closeMenu}
            alt="Cerrar menú"
            className={styles.closeMenu}
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          />
          <nav className={styles.menuItems}>
            <img src={CapillaLogo} alt="Icono de La Capilla" />
            <div className={styles.itemsNavigationContainer}>
              <div onClick={handleToCamping}>El Camping</div>
              <div onClick={handleToHistory}>Nuestra historia</div>
              <div onClick={handleToServices}>Servicios</div>
              <div onClick={handleToGalery}>Galeria</div>
              <div onClick={handleToTarifas}>Tarifas</div>
              <div onClick={handleToLlegar}>Ubicacion</div>
            </div>
          </nav>
        </div>
        {/**Fin menu hamburguesa */}
      </div>
    </section>
  );
};
