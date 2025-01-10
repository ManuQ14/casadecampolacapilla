import { useNavigate } from "react-router-dom";

import styles from "../styles/home.module.scss";
//import imageCamping from "../../../assets/images/6.jpg";

import line from "../../../assets/icons/subrayServices.svg";
import chevronRight from "../../../assets/icons/chevronRigth.svg";

export const Camping = () => {
  const navigate = useNavigate();

  const handleToHistory = () => {
    navigate("/nuestra-historia");
  };

  return (
    <div className={styles.campingSection} id="camping">
      <div className={styles.subtitleContainer}>
        <h2 className={styles.h2}>El camping</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>
      <div className={styles.campingTextContainer}>
        <div className={styles.campingText}>
          Casa de Campo La Capilla te invita a disfrutar de la tranquilidad y
          los sonidos auténticos de la vida rural. Este es un lugar donde la
          conexión con la naturaleza se vive plenamente, y hacemos todo lo
          posible para que no te falte nada durante tu estadía. <br />
          Ofrecemos un servicio de acampe diseñado para que experimentes el
          encanto del campo, acompañado del mejor servicio personalizado.
          <br /> <br />
          Además, desde nuestro campito, ubicado al borde del pueblo, podrás
          deleitarte con los amaneceres y atardeceres más hermosos, contemplando
          el horizonte sembrado que se extiende hasta donde alcanza la vista.
        </div>
        <div className={styles.conoceMasContainer} onClick={handleToHistory}>
          <span className={styles.conoceMasText}>Conocé mas de nuestra historia</span>
          <img
            src={chevronRight}
            alt="Chrevron right"
            className={styles.chevronRight}
          />
        </div>
      </div>
      <div className={styles.carrouselCamping}></div>
    </div>
  );
};
