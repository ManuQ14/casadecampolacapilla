import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/history.module.scss";

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

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      document.body.classList.remove("no-scroll");
    }
  };

  const handleToReserve = () => {
    navigate("/contacto");
  };

  const handleToHistory = () => {
    navigate("/inicio");
  };

  return (
    <>
      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
         {/*  <img src={fotoHistory} className={styles.headerHistory} /> */}

          <div className={styles.contentHeader}>
            <h1 className={styles.h1History}>Nuestra Historia</h1>
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
              <div onClick={() => handleScrollToSection("camping")}>
                El Camping
              </div>
              <div onClick={() => handleToHistory("nuestra-historia")}>
                Nuestra historia
              </div>
              <div onClick={() => handleScrollToSection("servicios")}>
                Servicios
              </div>
              <div onClick={() => handleScrollToSection("tarifas")}>
                Tarifas
              </div>
              <div onClick={() => handleScrollToSection("llegar")}>
                Cómo Llegar
              </div>
            </div>
            <div onClick={handleToReserve} className={styles.reserveButton}>
              Reservar
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
