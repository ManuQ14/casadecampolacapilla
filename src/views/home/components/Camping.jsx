import styles from "../styles/home.module.scss";
import imageCamping from "../../../assets/images/3.jpg";

export const Camping = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.campingTextContainer}>
        <h2 className={styles.h2}>El Camping</h2>
        <div className={styles.textCamping}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          rerum saepe molestias quasi consectetur quidem quia incidunt
          voluptatem perspiciatis similique, ipsa, at consequuntur. Aut sequi
          impedit consequuntur libero maiores molestiae?1
        </div>
      </div>
      <img
        className={styles.campingImage}
        src={imageCamping}
        alt="Atardecer en la capilla"
      />
    </div>
  );
};
