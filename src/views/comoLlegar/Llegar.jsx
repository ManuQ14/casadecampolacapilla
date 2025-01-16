import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles/llegar.module.scss";

import line from "../../assets/icons/subray.svg";
import tren from "../../assets/icons/train.svg";
import auto from "../../assets/icons/auto.svg";

import mapa from "../../assets/images/mapa.jpg"; //Mapa

import chrevronRight from "../../assets/icons/chevronRigth.svg";
import locationIcon from "../../assets/icons/maps.svg";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/telefono.svg";

export const Llegar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fadeTransition, setFadeTransition] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setFadeTransition(true); // Activa la transición al abrir
    }, 0);
  };

  const closeModal = () => {
    setFadeTransition(false); // Desactiva la transición antes de cerrar
    setTimeout(() => setIsModalOpen(false), 300); // Espera a que termine la animación
  };

  return (
    <div className={styles.llegarSection} id="llegar">
      <div className={styles.subtitleContainerLlegar}>
        <h2 className={styles.h2}>Cómo llegar</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>
      <div className={styles.trenBoxContainer}>
        <img src={tren} alt="Icono de tren" className={styles.iconTransporte} />

        <p className={styles.descripcionLlegar}>
          Si venís en tren, toma el ramal <b>San Martín Retiro - Junín</b> y
          baja en la estación Castilla, nosotros te pasamos a buscar por la
          estación y te llevamos al predio sin cargo, solo avísanos con
          anticipación.
        </p>
        <p className={styles.descripcionLlegar}>
          <br />
          Los pasajes se compran con antelación en este{" "}
          <Link
            rel="stylesheet"
            to="https://webventas.sofse.gob.ar/"
            target="_blanc"
            className={styles.linkCompraPasaje}
          >
            link
          </Link>
          <br />
          <br />
        </p>
        <p className={styles.descripcionLlegar}>
          El tren tiene un <b>único horario por día </b>, llega a Castilla a las
          21:53 y sale a las 3:30 am. Podés quedarte en el predio hasta las 3 am
          y nosotros te llevamos a la estación.
        </p>

        <Link
          to="https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/servicios-regionales-larga-distancia/buenosaires-junin"
          target="_blanc"
          rel="noreferrer"
          className={styles.linkTarifasTren}
        >
          Accedé a los horarios y tarifas del tren
          <img src={chrevronRight} alt="" className={styles.chrevronRight} />
        </Link>
      </div>
      <div className={styles.autoBoxContainer} >
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
      <div className={styles.modalSection} onMouseDown={closeModal}>
        {isModalOpen && (
          <div className={styles.modalMapaContenedor}>
            <div
            
              className={`${styles.modalContent} ${
                fadeTransition ? styles.fadeIn : ""
              }`}
            >
              <img
                src={mapa}
                alt="Mapa a Castilla"
                className={styles.mapaGrande}
                onClick={openModal}
              />
              <div className={styles.closeButton} onClick={closeModal}>
                X
              </div>
            </div>
          </div>
        )}
      </div>

      <img
        src={mapa}
        alt=""
        width={380}
        height={475}
        className={styles.mapaInfo}
        onClick={openModal}
      />
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
    </div>
  );
};
