import { Desplegables } from "./Desplegables";
import { DesplegableAuto } from "./DesplegableAuto";

import styles from "./styles/llegar.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";

import locationIcon from "../../../../assets/icons/llegarIcons/location.svg";
import mailIcon from "../../../../assets/icons/llegarIcons/mail.svg";
import phoneIcon from "../../../../assets/icons/llegarIcons/telefono.svg";

export const Llegar = () => {
  return (
    <div className={styles.llegarSection} id="llegar">
      <div className={styles.subtitleContainerLlegar}>
        <h2 className={styles.h2}>Ubicación</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7858.810076011966!2d-59.91222499999999!3d-34.61002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCasa%20de%20Campo%20La%20Capilla!5e1!3m2!1ses-419!2sus!4v1737419683095!5m2!1ses-419!2sus"
        className={styles.mapaLocation}
        
      ></iframe>

      <div className={styles.infoBoxContainer}>
        <div className={styles.itemInfoContainer}>
          <img
            src={locationIcon}
            alt="Icono de Locación"
            className={styles.iconInfo}
          />
          <p className={styles.descriptionInfo}>
            Acceso camino a Rawson, Calle 100, RP 42 entre Calles 11 y 13, B6616
            Castilla, Provincia de Buenos Aires
          </p>
        </div>
        <div className={styles.itemInfoContainerDos}>
          <img src={mailIcon} alt="Icono de mail" className={styles.iconInfo} />
          <p className={styles.descriptionInfo}>
            Casadecampolacapilla@gmail.com
          </p>
        </div>
        <div className={styles.itemInfoContainerDos}>
          <img
            src={phoneIcon}
            alt="Icono de telefono"
            className={styles.iconInfo}
          />
          <p className={styles.descriptionInfo}>11 5856-7591</p>
        </div>
      </div>
      {/**Inicio desplegable tren */}
      <Desplegables />
      <DesplegableAuto />
    </div>
  );
};
