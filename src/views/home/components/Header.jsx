import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/home.module.scss";

import videoCamping from "../../../assets/videos/videoPortada.mp4";

import openMenu from "../../../assets/icons/openMenu.svg";
import closeMenu from "../../../assets/icons/closeMenu.svg";

import instagramIcon from "../../../assets/icons/instagram.svg";
import youtubeIcon from "../../../assets/icons/youTube.svg";
import tikTokIcon from "../../../assets/icons/tikTok.svg";
import facebookIcon from "../../../assets/icons/facebook.svg";

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

  return (
    <>
      {/** Header Desktop */}
      <header className={styles.header}>
        <nav className={styles.navBar}></nav>
      </header>

      {/** Header Mobile */}
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>
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
              Reservar
            </div>
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
              <div onClick={() => handleScrollToSection("nuestra-historia")}>
                Nuestra historia
              </div>
              <div onClick={() => handleScrollToSection("services")}>
                Servicios
              </div>
              <div onClick={() => handleScrollToSection("tarifas")}>
                Tarifas
              </div>
              <div onClick={() => handleScrollToSection("location")}>
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
