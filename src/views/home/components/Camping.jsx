import styles from "../styles/home.module.scss";
import imageCamping from "../../../assets/images/6.jpg";

export const Camping = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.campingTextContainer}>
        <h2 className={styles.h2}>El Camping</h2>
        <div className={styles.textCamping}>
          Casa de Campo La Capilla te invita a disfrutar de la tranquilidad y
          los sonidos auténticos de la vida rural. Este es un lugar donde la
          conexión con la naturaleza se vive plenamente, y hacemos todo lo
          posible para que no te falte nada durante tu estadía. <br /> Ofrecemos
          un servicio de acampe diseñado para que experimentes el encanto del
          campo, acompañado del mejor servicio personalizado. <br /> <br />
          Además, desde nuestro campito, ubicado al borde del pueblo, podrás
          deleitarte con los amaneceres y atardeceres más hermosos, contemplando
          el horizonte sembrado que se extiende hasta donde alcanza la vista.
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
