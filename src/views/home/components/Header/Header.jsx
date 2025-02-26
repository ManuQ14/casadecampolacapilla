import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles/header.module.scss";

import videoCamping from "../../../../assets/videos/videoPortada.mp4";

import openMenu from "../../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import logoHeader from "../../../../assets/icons/logoHome.png";
import LogoHeaderScrolled from "../../../../assets/icons/logoHomeScrolled.png";

import CapillaLogo from "../../../../assets/icons/iconsBurguerMenu/LogoCapillaSVGMenuBurguer.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      document.body.classList.remove("no-scroll");
    }
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
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          <nav
            className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}
          >
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
              <div
                onClick={() => handleScrollToSection("camping")}
                className={styles.itemOption}
              >
                El Camping
              </div>
              <div
                onClick={() => handleToHistory("nuestra-historia")}
                className={styles.itemOption}
              >
                Nuestra historia
              </div>
              <div
                onClick={() => handleScrollToSection("servicios")}
                className={styles.itemOption}
              >
                Servicios
              </div>
              <div
                onClick={() => handleToLlegar("como-llegar")}
                className={styles.itemOption}
              >
                Cómo Llegar
              </div>
              <div
                onClick={() => handleScrollToSection("tarifas")}
                className={styles.itemOption}
              >
                Tarifas
              </div>
              <div
                onClick={() => handleScrollToSection("llegar")}
                className={styles.itemOption}
              >
                Ubicación
              </div>
            </div>
          </nav>
          <video
            src={videoCamping}
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoCamping}
          >
            <source src={videoCamping} type="video/mp4" />
          </video>

          <div className={styles.contentHeader}>
            <h1>Casa de Campo La Capilla</h1>
            <h3>Experiencia de acampe rural, vivila...</h3>
            <div onClick={handleToReserve} className={styles.reserveButton}>
              Hacenos tu consulta
            </div>
          </div>
        </div>

        <img
          src={openMenu}
          alt="Abrir menú hamburguesa"
          onClick={toggleMenu}
          aria-label="Abrir menú hamburguesa"
          className={styles.menuHamburguesaButton}
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
            <img src={CapillaLogo} alt="" />
            <div className={styles.itemsNavigationContainer}>
              <div
                onClick={() => handleScrollToSection("camping")}
                className={styles.itemOption}
              >
                El Camping
              </div>
              <div
                onClick={() => handleToHistory("nuestra-historia")}
                className={styles.itemOption}
              >
                Nuestra historia
              </div>
              <div
                onClick={() => handleScrollToSection("servicios")}
                className={styles.itemOption}
              >
                Servicios
              </div>
              <div
                onClick={() => handleScrollToSection("galeria")}
                className={styles.itemOption}
              >
                Galería
              </div>
              <div
                onClick={() => handleScrollToSection("tarifas")}
                className={styles.itemOption}
              >
                Tarifas
              </div>
              <div
                onClick={() => handleScrollToSection("llegar")}
                className={styles.itemOption}
              >
                Ubicación
              </div>
            </div>
          </nav>
        </div>
        {/**Fin menu hamburguesa */}
      </div>
    </>
  );
};
