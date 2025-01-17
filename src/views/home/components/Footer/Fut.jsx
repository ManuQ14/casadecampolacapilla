import { useNavigate } from "react-router-dom";

import styles from "./styles/footer.module.scss";

//imports svgs e iconos
import capillaIcon from "../../../../assets/iconCapilla.jpeg";

import instagramFooter from "../../../../assets/icons/footer/instagramFooter.svg";
import youtubeFooter from "../../../../assets/icons/footer/youTubeFooter.svg";
import tiktokFootrr from "../../../../assets/icons/footer/tikTokFooter.svg";
import facebookFooter from "../../../../assets/icons/footer/facebookFooter.svg";

export const Fut = () => {
  const navigate = useNavigate();

  const handleToCamping = () => {
    navigate("/inicio#camping");
    document.body.classList.remove("no-scroll");
  };

  const handleToServices = () => {
    navigate("/inicio#servicios");
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
    <footer className={styles.footer}>
      <img
        src={capillaIcon}
        alt=""
        width={140}
        className={styles.iconCapilla}
      />
      <div className={styles.contenedorNavegador}>
        <div onClick={handleToCamping} className={styles.navegador}>
          El Camping
        </div>
        <div onClick={handleToServices} className={styles.navegador}>
          Servicios
        </div>
        <div onClick={handleToTarifas} className={styles.navegador}>
          Tarifas
        </div>
        <div onClick={handleToLlegar} className={styles.navegador}>
          Cómo llegar
        </div>
      </div>
      <div className={styles.mediaIconsContainer}>
        <a
          href="https://instagram.com/casadecampolacapilla"
          target="_blanc"
          rel="noreferrers"
        >
          <img src={instagramFooter} className={styles.iconMedia} />
        </a>
        <a
          href="https://www.youtube.com/user/nikolunapra"
          target="_blanc"
          rel="noreferrers"
        >
          <img src={youtubeFooter} className={styles.iconMedia} />
        </a>
        <a
          href="https://www.tiktok.com/@casadecampolacapilla"
          target="_blanc"
          rel="noreferrers"
        >
          <img src={tiktokFootrr} className={styles.iconMedia} />
        </a>
        <a
          href="https://www.facebook.com/casadecampolacapilla"
          target="_blanc"
          rel="noreferrers"
        >
          <img src={facebookFooter} className={styles.iconMedia} />
        </a>
      </div>
      <p className={styles.textoCopyright}>
        Todos los derechos reservados. Creado por Camila Gallardo
      </p>
    </footer>
  );
};
