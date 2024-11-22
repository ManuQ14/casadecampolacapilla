import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import styles from "../styles/home.module.scss";

export const Header = () => {
  return (
    <>
      <NavBar />

      <header className={styles.header}>
        <div className={styles.coverHeader}>
          <div className={styles.boxMobileContainer}>
            <div className={styles.titlesContainer}>
            <h1>Casa de campo La Capilla</h1>
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
