import { Link } from "react-router-dom";

import styles from "./styles/llegar.module.scss";

import line from "../../assets/icons/subray.svg";
import tren from "../../assets/icons/train.svg";
import auto from "../../assets/icons/auto.svg";
import mapa from "../../assets/icons/mapa.jpeg";
import chrevronRight from "../../assets/icons/chevronRigth.svg";
import locationIcon from "../../assets/icons/maps.svg";
import mailIcon from "../../assets/icons/mail.svg";
import phoneIcon from "../../assets/icons/telefono.svg";

export const Llegar = () => {
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

        <p className={styles.descripciónLlegar}>
          Si elegís venir en tren, tomás el ramal{" "}
          <b>San Martín Retiro - Junín</b> y te bajás en la estación Castilla.
          Solo tenés que avisarnos o mandarnos tu pasaje con anticipación, y
          nosotros te pasamos a buscar por la estación . El servicio está
          incluido y estamos a sólo 1.000 metros
        </p>
        <p className={styles.descripciónLlegar}>
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
        <p className={styles.descripciónLlegar}>
          Es importante tener en cuenta que el tren tiene un{" "}
          <b>único horario</b> por día. Llega a Castilla a las 21:53 y el
          regreso es a las 3:30 am. Por eso, lo que solemos hacer es que podés
          quedarte en el predio hasta las 3 am, y desde allí te llevamos hasta
          la estación.
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
      <div className={styles.autoBoxContainer}>
        <img src={auto} alt="Icono auto" className={styles.iconTransporte} />
        <p className={styles.descripciónLlegar}>
          Desde Buenos Aires, tomás la Ruta 7 y hacés 142 km hasta Carmen de
          Areco. Ahí doblás a la izquierda para agarrar la Ruta 51. Después de
          20 km, volvés a doblar a la izquierda hacia la Ruta 43. Manejás 8 km
          más y te vas a encontrar con la entrada a Castilla; ahí girás a la
          derecha para tomar la Ruta Provincial 42. A solo 1.000 metros te
          esperamos en nuestra Casa de Campo.
        </p>
      </div>
      <img src={mapa} alt="" width={380} />
      <div className={styles.infoBoxContainer}>
        <div className={styles.itemInfoContainer}>
          <img src={locationIcon} alt="Icono de Locación" className={styles.iconInfo} />
          <p className={styles.descriptionInfo}>
            Acceso camino a Rawson, Calle 100, RP 42 entre Calles 11 y 13, B6616
            Castilla, Provincia de Buenos Aires
          </p>
        </div>
        <div className={styles.itemInfoContainerDos}>
          <img src={mailIcon} alt="Icono de mail" className={styles.iconInfo} />
          <p className={styles.descriptionInfo}>
            casadecampolacapilla@gmail.com
          </p>
        </div>
        <div className={styles.itemInfoContainerDos}>
          <img src={phoneIcon} alt="Icono de telefono" className={styles.iconInfo} />
          <p className={styles.descriptionInfo}>11 5856-7591</p>
        </div>
      </div>
    </div>
  );
};
