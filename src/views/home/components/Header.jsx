import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import styles from "../styles/home.module.scss";

import videoCamping from "../../../assets/videos/videoPortada.mp4";

import openMenu from "../../../assets/icons/openMenu.svg";
import closeMenu from "../../../assets/icons/closeMenu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleCloseMenu(); // Cierra el menú después de hacer scroll
    }
  };

  return (
    <>
      <NavBar />
      <header className={styles.header}>
        {isMenuOpen && (
          <div className={styles.burguerMenu}>
            <img
              src={closeMenu}
              alt="Cerrar menú"
              className={styles.closeMenu}
              onClick={handleCloseMenu}
            />
            <div className={styles.itemsMenuContainer}>
              <div className={styles.linksContainer}>
                <Link onClick={() => handleScrollToSection("camping")}>
                  El Camping
                </Link>
                <Link> Nuestra historia </Link> {/* Este no cierra el menú */}
                <Link onClick={() => handleScrollToSection("servicios")}>
                  Servicios
                </Link>
                <Link onClick={() => handleScrollToSection("tarifas")}>
                  Tarifas
                </Link>
                <Link onClick={() => handleScrollToSection("como-llegar")}>
                  Cómo llegar
                </Link>
              </div>
              <Link to="/contacto">Reservar</Link>{" "}
              {/* Este no cierra el menú */}
              <div className={styles.boxIdconMedia}>
                <Link to="https://instagram.com" target="_blank">
                  Instagram
                </Link>
                <Link to="https://youtube.com" target="_blank">
                  YouTube
                </Link>
                <Link to="https://tiktok.com" target="_blank">
                  TikTok
                </Link>
                <Link to="https://facebook.com" target="_blank">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className={styles.containerIcon}>
          <img
            src={openMenu}
            alt="Abrir menú"
            className={styles.openMenu}
            onClick={handleOpenMenu}
          />
        </div>
        <div className={styles.coverHeader}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoPortada}
          >
            <source src={videoCamping} type="video/mp4" />
          </video>

          <div className={styles.boxMobileContainer}>
            <div className={styles.titlesContainer}>
              <h1>Casa de Campo La Capilla</h1>
              <h3>Experiencia de acampe rural, vivila...</h3>
            </div>
            <Link to="/contacto" className={styles.reserveButton}>
              Reservar
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
