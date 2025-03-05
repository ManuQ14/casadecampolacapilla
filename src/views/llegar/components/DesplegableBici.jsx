import { useState } from "react";

import biciIcon from "../../../assets/icons/llegarIcons/biciIcon.svg";
import expandAcordeon from "../../../assets/icons/add.svg";
import closeAcordeon from "../../../assets/icons/closeAcordeon.svg";

import styles from "../styles/llegar.module.scss";

export const DesplegableBici = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.contenedorBici} hidden4`}>
      <div className={styles.titleContainer} onClick={toggleAccordion}>
        <img
          src={biciIcon}
          alt="Icono de tren"
          width={25}
          className={styles.trainSVG}
        />
        <div className={styles.ubicationTitle}>Cómo llegar en bicicleta</div>
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
            Tomás el tren{" "}
            <strong className={styles.helpBold}>Once - Moreno</strong> y hacés
            transbordo al{" "}
            <strong className={styles.helpBold}> Moreno - Mercedes.</strong>{" "}
            Desde allí, son 46 km siguiendo las vías del tren por la Ruta
            Provincial 42, un camino de tierra que atraviesa los pueblos de San
            Jacinto, Franklin y Rivas, hasta llegar a Castilla.
          </p>
        </div>
      </div>
    </div>
  );
};
