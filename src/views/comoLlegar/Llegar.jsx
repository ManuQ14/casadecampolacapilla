import styles from "./styles/llegar.module.scss";

import line from "../../assets/icons/subray.svg";

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
    </div>
  );
};
