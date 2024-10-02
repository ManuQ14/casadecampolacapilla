import { Link } from "react-router-dom";

import styles from "../styles/home.module.scss";

export const Services = () => {
  return (
    <div className={styles.sectionContainerCenter}>
      <div className={styles.blockContainer}>
        <h2 className={styles.h2}>Servicios</h2>

        <div className={styles.iconBlockContainer}>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Wi-fi</h4>
          </div>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Agua caliente 24hs</h4>
          </div>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Corriente eléctrica</h4>
          </div>
          <div className={styles.itemIconContainer}>
            <img src="" alt="" />
            <h4>Comida</h4>
          </div>
        </div>
        <Link to="/el-camping" className={styles.buttonConoceMas}>
          Conocé más
        </Link>
      </div>
    </div>
  );
};
