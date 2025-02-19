import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/history.module.scss";

import subrayLine from "../../../assets/icons/subrayWhite.svg";
import openMenu from "../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import instagramIcon from "../../../assets/icons/iconsBurguerMenu/instagram.svg";
import youtubeIcon from "../../../assets/icons/iconsBurguerMenu/youTube.svg";
import tikTokIcon from "../../../assets/icons/iconsBurguerMenu/tikTok.svg";
import facebookIcon from "../../../assets/icons/iconsBurguerMenu/facebook.svg";
import CapillaLogo from "../../../assets/icons/iconsBurguerMenu/LogoCapillaSVGMenuBurguer.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
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

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      document.body.classList.remove("no-scroll");
    }
  };

  const handleToCamping = () => {
    navigate("/inicio#camping");
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
      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
          <nav
            className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}
          >
            <div className={styles.logoDesktop}>
              <img src="logo" alt="" className={styles.imgLogoDesktop} />
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
              <div className={styles.itemOption}>Nuestra historia</div>
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

          <div className={styles.contentHeader}>
            <h1 className={styles.h1History}>Nuestra Historia</h1>
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
              <div>Nuestra historia</div>
              <div onClick={handleToServices}>Servicios</div>
              <div onClick={handleToGalery}>Galeria</div>
              <div onClick={handleToTarifas}>Tarifas</div>
              <div onClick={handleToLlegar}>Ubicación</div>
            </div>
            <div onClick={handleToReserve} className={styles.reserveButton}>
              Hacenos tu consulta
            </div>
            <div className={styles.mediaIconContainer}>
              <a
                href="https://instagram.com/casadecampolacapilla"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram icon"
                  className={styles.iconMedia}
                />
              </a>
              <a
                href="https://www.youtube.com/user/nikolunapra"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={youtubeIcon}
                  alt="Youtube icon"
                  className={styles.iconMedia}
                />
              </a>
              <a
                href="https://www.tiktok.com/@casadecampolacapilla"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tikTokIcon}
                  alt="Tik Tok Icon"
                  className={styles.iconMedia}
                />
              </a>
              <a
                href="https://www.facebook.com/casadecampolacapilla"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className={styles.iconMedia}
                />
              </a>
            </div>
          </nav>
        </div>
        {/**Fin menu hamburguesa */}
      </div>
    </>
  );
};
