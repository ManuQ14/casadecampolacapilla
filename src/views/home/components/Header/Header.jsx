import { useNavigate } from "react-router-dom";

import { NavBar } from "../../../main/desktop/NavBarHeader";

import styles from "./styles/header.module.scss";

import videoCamping from "../../../../assets/videos/videoPortada.mp4";

import { BurgerMenu } from "../../../main/mobile/BurgerMenu";

export const Header = () => {
  const navigate = useNavigate();

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

  return (
    <>
      <div className={styles.headerMobile}>
        <div className={styles.coverHeader}>

          
          <NavBar />

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

        <BurgerMenu />
        
      </div>
    </>
  );
};
