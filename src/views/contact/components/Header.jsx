import styles from "../styles/contact.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import subrayLine from "../../../assets/icons/subrayWhite.svg";
import openMenu from "../../../assets/icons/iconsBurguerMenu/openMenu.svg";
import closeMenu from "../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import instagramIcon from "../../../assets/icons/iconsBurguerMenu/instagram.svg";
import youtubeIcon from "../../../assets/icons/iconsBurguerMenu/youTube.svg";
import tikTokIcon from "../../../assets/icons/iconsBurguerMenu/tikTok.svg";
import facebookIcon from "../../../assets/icons/iconsBurguerMenu/facebook.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("no-scroll", !isMenuOpen);
  };

  const handleGoToHome = () => {
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
            <div className={styles.itemsNavigationContainer}>
              <div onClick={handleGoToHome}>Inicio</div>
              <div onClick={handleToCamping}>El Camping</div>
              <div onClick={handleToHistory}>Nuestra historia</div>
              <div onClick={handleToServices}>Servicios</div>
              <div onClick={handleToGalery}>Galeria</div>
              <div onClick={handleToTarifas}>Tarifas</div>
              <div onClick={handleToLlegar}>Cómo Llegar</div>
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
    </section>
  );
};
