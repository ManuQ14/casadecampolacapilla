import { useState } from "react";
import { Link } from "react-router-dom";
import tren from "../../../assets/icons/llegarIcons/train.svg";
import expandAcordeon from "../../../assets/icons/add.svg";
import closeAcordeon from "../../../assets/icons/closeAcordeon.svg";
import chrevronRight from "../../../assets/icons/chevronTwo.svg";

import styles from "../styles/llegar.module.scss";

export const Desplegables = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.contenedorAcordeon} hidden2`}>
      <div className={styles.titleContainer} onClick={toggleAccordion}>
        <img
          src={tren}
          alt="Icono de tren"
          width={25}
          className={styles.trainSVG}
        />
        <div className={styles.ubicationTitle}>Cómo llegar en tren</div>
        <img
          src={isExpanded ? closeAcordeon : expandAcordeon}
          alt={isExpanded ? "Cerrar información" : "Expandir información"}
          className={styles.expandAcordeon}
          onClick={toggleAccordion}
        />
      </div>

      <div
        className={`${styles.accordionContent} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <div className={styles.indicationContainer}>
          <p>
            Si venís en tren, tomá el ramal{" "}
            <strong className={styles.helpBold}>
              San Martín Retiro - Junín
            </strong>{" "}
            y bajá en la estación Castilla, nosotros te pasamos a buscar por la
            estación y{" "}
            <strong className={styles.helpBold}>
              te llevamos al predio sin cargo, solo avisanos con anticipación.
            </strong>
          </p>
          <br />
          <p>
            Te recomendamos comprar el pasaje con antelación en este{" "}
            <a
              href="https://webventas.sofse.gob.ar/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkCompraPasaje}
            >
              link
            </a>
          </p>
          <br />
          <p>
            El tren tiene un{" "}
            <strong className={styles.helpBold}>único horario por día </strong>,
            llega a Castilla a las 21:53 y sale a las 3:30 am. Podés quedarte en
            el predio hasta las 3 am, como opcional podes adicionar el servicio
            de traslado hasta la estación
          </p>
        </div>
        <div className={styles.containerLink}>
          <Link
            to="https://www.argentina.gob.ar/transporte/trenes-argentinos/horarios-tarifas-y-recorridos/servicios-regionales-larga-distancia/buenosaires-junin"
            target="blanc"
            className={styles.linkTarifasTren}
          >
            Accedé a los horarios y tarifas del tren
          </Link>
          <img src={chrevronRight} alt="" className={styles.chrevronRight} />
        </div>
      </div>
    </div>
  );
};
