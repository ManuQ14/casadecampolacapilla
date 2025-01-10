import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/home.module.scss";

import videoCamping from "../../../assets/videos/videoPortada.mp4";

import openMenu from "../../../assets/icons/openMenu.svg";
import closeMenu from "../../../assets/icons/closeMenu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <source src={videoCamping} type="video/mp4"/>
          </video>

          <div className={styles.contentHeader}>

            <h1>Casa de Campo La Capilla</h1>
            <h3>Experiencia de acampe rural, vivila...</h3>
            <Link to="/contacto" className={styles.reserveButton}>
              Reservar
            </Link>
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
            <Link to="/" onClick={() => handleScrollToSection("camping")}>
              El Camping
            </Link>
            <Link to="/" onClick={() => handleScrollToSection("services")}>
              Servicios
            </Link>
            <Link to="/" onClick={() => handleScrollToSection("tarifas")}>
              Tarifas
            </Link>
            <Link to="/" onClick={() => handleScrollToSection("location")}>
              Cómo Llegar
            </Link>
            <Link to="/contacto" className={styles.reserveButton}>
              Reservar
            </Link>
          </nav>
        </div>
        {/**Fin menu hamburguesa */}
      </div>
    </>
  );
};
