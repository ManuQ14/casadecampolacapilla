import styles from "./styles/footer.module.scss";

//imports svgs e iconos
import capillaIcon from "../../../../assets/iconCapilla.jpeg";

import instagramFooter from "../../../../assets/icons/footer/instagramFooter.svg";
import youtubeFooter from "../../../../assets/icons/footer/youTubeFooter.svg";
import tiktokFootrr from "../../../../assets/icons/footer/tikTokFooter.svg";
import facebookFooter from "../../../../assets/icons/footer/facebookFooter.svg";

export const Fut = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={capillaIcon}
        alt=""
        width={140}
        className={styles.iconCapilla}
      />
      <div className={styles.contenedorNavegador}>
        <div className={styles.infoContainer}>
          Calle 100 (RP42) Nro 98, Castilla, B6616, Provincia de Buenos Aires
        </div>
        <div className={styles.infoContainer}>
          <strong>Email:</strong> Casadecampolacapilla@gmail.com
        </div>
        <div className={styles.infoContainer}>
          <strong>Whatsapp:</strong> 11 5856-7591
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
