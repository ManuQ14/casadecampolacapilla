import styles from "../styles/home.module.scss";

import lineGray from "../../../assets/icons/subrayMkt.svg";
import fotoMkt1 from "../../../assets/images/fotoMkt1.jpg";
import fotoMkt2 from "../../../assets/images/fotoMkt2.jpg";

export const Mkt = () => {
  return (
    <div className={styles.mktSection}>
      <div className={styles.containerMktOne}>
        <div className={styles.subtitleContainerMkt}>
          <h2 className={styles.h2Mkt}>
            Disfrutá de los más lindos atardeceres
          </h2>
          <img src={lineGray} alt="" />
        </div>
        <img
          src={fotoMkt1}
          alt="Atardeceres en castilla"
          className={styles.fotoContainer}
        />
      </div>
      <div className={styles.containerMktTwo}>
        <div className={styles.subtitleContainerMkt2}>
          <h2 className={styles.h2Mkt}>
            ¿Sabías que Castilla tiene casi cero contaminación lumínica?
          </h2>
          <img src={lineGray} alt="linea subrayadora" />
          <p className={styles.astroExplication}>
            Lo que la convierte en el lugar perfecto para hacer astrofotografía
            y disfrutar de las estrellas.
          </p>
        </div>
        <img
          src={fotoMkt2}
          alt="Astrofotografía"
          className={styles.fotoContainer2}
        />
      </div>
    </div>
  );
};
