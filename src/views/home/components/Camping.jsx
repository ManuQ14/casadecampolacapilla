import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subrayServices.svg";
import chevronRight from "../../../assets/icons/chevronRigth.svg";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";
import img5 from "../../../assets/images/5.jpg";

const carrouselImages = [img1, img2, img3, img4, img5];

export const Camping = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carrouselImages.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const handleToHistory = () => {
    navigate("/nuestra-historia");
  };

  const goToIndex = (index) => setCurrentIndex(index);

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
          <span className={styles.conoceMasText}>
            Conocé más de nuestra historia
          </span>
          <img
            src={chevronRight}
            alt="Chevron right"
            className={styles.chevronRight}
          />
        </div>
      </div>
      <div className={styles.carrouselCamping}>
        <div
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carrouselImages.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <div className={styles.carouselIndicators}>
          {carrouselImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => goToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
