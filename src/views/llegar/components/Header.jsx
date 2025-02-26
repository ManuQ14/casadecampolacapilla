import { useState, useEffect } from "react";
import styles from "../styles/llegar.module.scss";
import { useNavigate } from "react-router-dom";

import logoHeader from "../../../assets/icons/logoHome.png";
import LogoHeaderScrolled from "../../../assets/icons/logoHomeScrolled.png";

import openMenu from "../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import subrayLine from "../../../assets/icons/subrayWhite.svg";

import CapillaLogo from "../../../assets/icons/iconsBurguerMenu/LogoCapillaSVGMenuBurguer.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const handleToHome = () => {
    navigate("/inicio");
    document.body.classList.remove("no-scroll");
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



  const handleToTarifas = () => {
    navigate("/inicio#tarifas");
    document.body.classList.remove("no-scroll");
  };

  const handleToLlegar = () => {
    navigate("/inicio#llegar");
    document.body.classList.remove("no-scroll");
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
    <section className={styles.comoLlegarSection}>
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          {/*  <img src={fotoHistory} className={styles.headerHistory} /> */}
          <nav
            className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}
          >
            <div className={styles.logoDesktop}>
              <img
                src={scrolled ? LogoHeaderScrolled : logoHeader}
                alt="Logo Capilla"
                className={styles.imgLogoDesktop}
                onClick={handleToHome}
                onMouseEnter={() => LogoHeaderScrolled}
                onMouseLeave={() => logoHeader}
              />
            </div>
            <div
              className={`${styles.navigatonHeader} ${
                scrolled ? styles.navigatonHeaderScrolled : ""
              }`}
            >
              <div onClick={handleToCamping} className={styles.itemOption}>
                El Camping
              </div>
              <div className={styles.itemOption}>Nuestra historia</div>
              <div onClick={handleToServices} className={styles.itemOption}>
                Servicios
              </div>
             
              <div onClick={handleToTarifas} className={styles.itemOption}>
                Tarifas
              </div>
              <div onClick={handleToLlegar} className={styles.itemOption}>
                Ubicación
              </div>
            </div>
          </nav>
          <div className={styles.contentHeader}>
            <h1 className={styles.h1History}>Cómo Llegar</h1>
            <img src={subrayLine} alt="" />
          </div>
        </div>

        <img
          src={openMenu}
          alt="Abrir menú hamburguesa"
          onClick={toggleMenu}
          aria-label="Abrir menú hamburguesa"
          className={styles.burgerMenuButton}
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
