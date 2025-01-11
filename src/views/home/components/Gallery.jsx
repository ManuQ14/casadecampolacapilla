import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subray.svg";

export const Gallery = () => {
  return (
    <div className={styles.gallerySection}>
      <div className={styles.subtitleContainer}>
        <h2 className={styles.h2}>Galería</h2>
        <img src={line} alt="" />
      </div>
      <div></div>
    </div>
  );
};
