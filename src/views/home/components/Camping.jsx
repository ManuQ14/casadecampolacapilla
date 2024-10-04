import styles from "../styles/home.module.scss";
import imageCamping from "../../../assets/images/3.jpg";

export const Camping = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.campingTextContainer}>
        <h2 className={styles.h2}>El Camping</h2>
        <div className={styles.textCamping}>
          Casa de Campo La Capilla es un espacio para disfrutar la tranquilidad
          y los sonidos de la vida de campo. Es una conexión con la naturaleza
          rural donde tratamos que no te falte nada. Ofrecemos servicio de
          acampe para vivir una experiencia campestre, con el mejor servicio de
          atención personalizada.
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
