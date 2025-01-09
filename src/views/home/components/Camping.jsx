import { Link } from "react-router-dom";

import styles from "../styles/home.module.scss";
import imageCamping from "../../../assets/images/6.jpg";

import line from "../../../assets/icons/subrayServices.svg";
import chevronRight from "../../../assets/icons/chevronRigth.svg";

export const Camping = () => {
  return (
    <div className={styles.campingSection} id="camping">
      <div className={styles.campingTextContainer}>
        <div className={styles.containerTitle}>
          <h2 className={styles.subtitle1}>El Camping</h2>
          <img
            src={line}
            alt="linea subrayadora"
            className={styles.lineSubrayer}
          />
        </div>
        <div className={styles.textCamping}>
          Casa de Campo La Capilla te invita a disfrutar de la tranquilidad y
          los sonidos auténticos de la vida rural. Este es un lugar donde la
          conexión con la naturaleza se vive plenamente, y hacemos todo lo
          posible para que no te falte nada durante tu estadía. <br />
          Ofrecemos un servicio de acampe diseñado para que experimentes el
          encanto del campo, acompañado del mejor servicio personalizado. <br /> <br />
          Además, desde nuestro campito, ubicado al borde del pueblo, podrás
          deleitarte con los amaneceres y atardeceres más hermosos, contemplando
          el horizonte sembrado que se extiende hasta donde alcanza la vista.
        </div>
        <div className={styles.linkContainer}>
          <Link to="/nuestra-historia" className={styles.buttonToOurHistory}>
            Conocé más de nuestra historia
          </Link>
          <img src={chevronRight} alt="" className={styles.chevronRight} />
        </div>
      </div>
      <img
        className={styles.campingImage}
        src={imageCamping}
        alt="Atardecer en la capilla"
        width="100%"
      />
    </div>
  );
};
