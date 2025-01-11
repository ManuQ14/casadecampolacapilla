import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subrayServices.svg";
import chevronRight from "../../../assets/icons/chevronRigth.svg";

//Import de fotos de carrousel
import foto1 from "../../../assets/images/1.jpg";
import foto2 from "../../../assets/images/2.jpg";
import foto3 from "../../../assets/images/3.jpg";
import foto4 from "../../../assets/images/4.jpg";
import foto5 from "../../../assets/images/5.jpg";

const fotosCarrousel = [foto1, foto2, foto3, foto4, foto5];

export const Camping = () => {
  const navigate = useNavigate();
  const intervalRef = useRef(null); // useRef para manejar el intervalo sin perder la referencia

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const handleToHistory = () => {
    navigate("/nuestra-historia");
  };

  const startCarousel = () => {
    intervalRef.current = setInterval(nextSlide, 5000); // Asigna el intervalo a la referencia
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Limpia el intervalo
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotosCarrousel.length);
  };

  const handleDotClick = (index) => {
    stopCarousel(); // Detiene el carrusel al hacer clic
    setCurrentIndex(index);
    startCarousel(); // Reinicia el intervalo después de interactuar
  };

  const handleTouchStart = (e) => {
    stopCarousel(); // Detiene el carrusel cuando empieza el touch
    setStartX(e.touches[0].clientX); // Guarda la posición inicial
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const difference = endX - startX;

    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? fotosCarrousel.length - 1 : prevIndex - 1
      );
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === fotosCarrousel.length - 1 ? 0 : prevIndex + 1
      );
    }
    setStartX(null);
    startCarousel(); // Reinicia el intervalo después del touch
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
          <span className={styles.conoceMasText}>
            Conocé mas de nuestra historia
          </span>
          <img
            src={chevronRight}
            alt="Chrevron right"
            className={styles.chevronRight}
          />
        </div>
      </div>

      {/**Inicio carrousel */}
      <div
        className={styles.carrouselCamping}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageWrapper}>
          {fotosCarrousel.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt={`Imagen ${index + 1}`}
              className={`${styles.image} ${
                currentIndex === index ? styles.active : ""
              }`}
            />
          ))}
        </div>
        <div className={styles.dots}>
          {fotosCarrousel.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
