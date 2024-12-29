import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subrayServices.svg";
import mailIcon from "../../../assets/icons/mailIcon.svg";
import mapsIcon from "../../../assets/icons/mapsIcon.svg";
import mobileIcon from "../../../assets/icons/mobileIcon.svg";

export const Ubication = () => {
  return (
    <div className={styles.sectionUbication}>
      <div className={styles.containerTitle}>
        <h2 className={styles.h2Servicios}>Nos encontrás en:</h2>
        <img
          src={line}
          alt="linea subrayadora"
          className={styles.lineSubrayer}
        />
      </div>

      <div className={styles.boxUbicationContainer}>
        <div className={styles.ubicationContainer}>
          <img src={mapsIcon} alt="icono de mapa" />
          <p>
            Acceso camino a Rawson, Calle 100, RP 42 entre Calles 11 y 13, B6616
            Castilla, Provincia de Buenos Aires
          </p>
        </div>
        <div className={styles.ubicationContainer}>
          <img src={mailIcon} alt="icono de email" />
          <p>
            casadecampolacapilla@gmail.com
          </p>
        </div>
        <div className={styles.ubicationContainer}>
          <img src={mobileIcon} alt="icono de celular" />
          <a href="+54 9 11-5856-7591" />        
          
        </div>
      </div>

      <iframe
        className={styles.mapaBox}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.2195358826991!2d-59.91120948748315!3d-34.60998953624427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCamping%20Casa%20de%20Campo%20La%20Capilla!5e1!3m2!1sen!2sar!4v1728394977080!5m2!1sen!2sar"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};
