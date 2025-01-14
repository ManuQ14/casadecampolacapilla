//import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";



export const Opinions = () => {


  return (
    <div className={styles.sectionOpiniones}>
      <div className={styles.subtitleContainerOpiniones}>
        <h2 className={styles.h2}>Lo que dicen nuestros visitantes</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>

      <div>
      
      </div>
    </div>
  );
};
