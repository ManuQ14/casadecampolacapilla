import { Link } from "react-router-dom";

import styles from "./styles/footer.module.scss";

//imports svgs e iconos
import capillaIcon from "../../../../assets/icons/CapillaLogo.svg";

import instagramFooter from "../../../../assets/icons/footer/instagramFooter.svg";
import youtubeFooter from "../../../../assets/icons/footer/youTubeFooter.svg";
import tiktokFootrr from "../../../../assets/icons/footer/tikTokFooter.svg";
import facebookFooter from "../../../../assets/icons/footer/facebookFooter.svg";

import whatsapp from "../../../../assets/icons/footer/wpp.svg";
import mail from "../../../../assets/icons/footer/mail.svg";
import location from "../../../../assets/icons/footer/maps.svg";

export const Fut = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={capillaIcon}
        alt=""
        width={140}
        className={styles.iconCapilla}
      />
      <div className={styles.mainFooter}>
        <div className={styles.contenedorNavegador}>
          <p className={styles.titleFooter}>Contacto</p>
          <div className={styles.infoContainer}>
            <img
              src={location}
              alt="Location icon"
              className={styles.iconFooters}
            />
            Calle 100 (RP42) Nro 98, Castilla, B6616, Provincia de Buenos Aires
          </div>
          <div className={styles.infoContainerDos}>
            <img src={mail} alt="Mail Icon" className={styles.iconFooters} />{" "}
            Casadecampolacapilla@gmail.com
          </div>
          <div className={styles.infoContainerDos}>
            <img
              src={whatsapp}
              alt="Whatsapp icon"
              className={styles.iconFooters}
            />
            11 5856-7591
          </div>
        </div>
        <div className={styles.mediaIconsContainer}>
          <p className={styles.titleFooter}>Nuestras redes</p>
          <div className={styles.iconsMediaContainer}>
            <a
              href="https://instagram.com/casadecampolacapilla"
              target="_blanc"
              rel="noreferrers"
            >
              <img src={instagramFooter} className={styles.iconMedia} alt="instagram icon"/>
            </a>
            <a
              href="https://www.youtube.com/user/nikolunapra"
              target="_blanc"
              rel="noreferrers"
            >
              <img src={youtubeFooter} className={styles.iconMedia} alt="youtube icon"/>
            </a>
            <a
              href="https://www.tiktok.com/@casadecampolacapilla"
              target="_blanc"
              rel="noreferrers"
            >
              <img src={tiktokFootrr} className={styles.iconMedia} alt="tiktok icon" />
            </a>
            <a
              href="https://www.facebook.com/casadecampolacapilla"
              target="_blanc"
              rel="noreferrers"
            >
              <img src={facebookFooter} className={styles.iconMedia}  alt="facebook icon"/>
            </a>
          </div>
        </div>
      </div>
      <p className={styles.textoCopyright}>
        Todos los derechos reservados. Creado por{" "}
        <Link
          className={styles.linkToBehance}
          to="https://www.behance.net/camigallardo"
          target="_blank"
          styles="text-decoration: none;"
        >
          {" "}
          Camila Gallardo
        </Link>
      </p>
    </footer>
  );
};
