import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

import videoPortada from "../../../assets/videos/videoPortada.mp4";

import styles from "../styles/home.module.scss";

export const Header = () => {
  return (
    <>
      <NavBar />

      <header className={styles.header}>
        <div className={styles.coverHeader}>
          <video 
          autoPlay 
          loop
          muted
          playsInline
          className={styles.videoPortada}
          >
            <source src={videoPortada} type="video/mp4" />
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
