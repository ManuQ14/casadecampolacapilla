//import { useState } from "react";
//import { Link } from "react-router-dom";
import { Desplegables } from "./Desplegables";

import styles from "./styles/llegar.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";
//import tren from "../../../../assets/icons/llegarIcons/train.svg";
import auto from "../../../../assets/icons/llegarIcons/auto.svg";

//import chrevronRight from "../../../../assets/icons/chevron.svg";
import locationIcon from "../../../../assets/icons/llegarIcons/maps.svg";
import mailIcon from "../../../../assets/icons/llegarIcons/mail.svg";
import phoneIcon from "../../../../assets/icons/llegarIcons/telefono.svg";

export const Llegar = () => {
  /*  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fadeTransition, setFadeTransition] = useState(false); */

  /*  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      setFadeTransition(true); // Activa la transición al abrir
    }, 0);
  };

  const closeModal = () => {
    setFadeTransition(false); // Desactiva la transición antes de cerrar
    document.body.classList.remove("no-scroll");
    setTimeout(() => setIsModalOpen(false), 300); // Espera a que termine la animación
  }; */

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
        className={styles.mapaLocation}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2269.932147681282!2d-59.91137315885719!3d-34.60973379253219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCamping%20Casa%20de%20Campo%20La%20Capilla!5e0!3m2!1sen!2sar!4v1737391667391&maptype=roadmap&disableDefaultUI=true&showinfo=0&showlabels=0&logovisible=0&keyboardshortcuts=false&scrollwheel=false&clickableIcons=false"
        referrerPolicy="no-referrer-when-downgrade"
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

      <div className={styles.autoBoxContainer}>
        <img
          src={auto}
          alt="Icono auto"
          className={styles.iconTransporte}
          width={53}
          height={47}
        />
        <p className={styles.descripcionLlegarAuto}>
          Desde Buenos Aires, tomá la Ruta 7 y recorré 142 km hasta Carmen de
          Areco. Ahí, girá a la izquierda por la Ruta 51. Luego de 20 km, doblá
          nuevamente a la izquierda para tomar la Ruta 43. Manejás 8 km más y te
          vas a encontrar con la entrada a Castilla; ahí girás a la derecha para
          tomar la Ruta Provincial 42. A solo 1.000 metros te esperamos en
          nuestra Casa de Campo.
        </p>
      </div>
    </div>
  );
};
