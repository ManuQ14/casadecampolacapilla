import { useState } from "react";

import auto from "../../../../assets/icons/llegarIcons/auto.svg";
import expandAcordeon from "../../../../assets/icons/add.svg";
import closeAcordeon from "../../../../assets/icons/closeAcordeon.svg";

import maps from "../../../../assets/images/comoLlegar/maps.jpg";

import styles from "./styles/llegar.module.scss";

export const DesplegableAuto = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.contenedorAcordeon}>
      <div className={styles.titleContainer}>
        <img
          src={auto}
          alt="Icono de tren"
          width={25}
          className={styles.trainSVG}
        />
        <div className={styles.ubitacionTitle}>Cómo llegar en auto</div>
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
          Desde Buenos Aires, tomá la Ruta 7 y recorré 142 km hasta Carmen de
          Areco. Ahí, girá a la izquierda por la Ruta 51. Luego de 20 km, doblá
          nuevamente a la izquierda para tomar la Ruta 43. Manejás 8 km más y te
          vas a encontrar con la entrada a Castilla; ahí girás a la derecha para
          tomar la Ruta Provincial 42. A solo 1.000 metros te esperamos en
          nuestra Casa de Campo.
        </div>
        <img src={maps} alt="" className={styles.mapaLlegar}/>
      </div>
    </div>
  );
};
