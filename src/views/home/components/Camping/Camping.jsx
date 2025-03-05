import { useNavigate /* useLocation */ } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";

import styles from "./styles/camping.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";
import chevronRight from "../../../../assets/icons/chevron.svg";

//Import de fotos de carrousel
import foto1 from "../../../../assets/images/initialCarousel/1.jpg";
import foto2 from "../../../../assets/images/initialCarousel/2.jpg";
import foto3 from "../../../../assets/images/initialCarousel/3.jpg";
import foto4 from "../../../../assets/images/initialCarousel/4.jpg";
import foto5 from "../../../../assets/images/initialCarousel/5.jpg";

const fotosCarrousel = [foto1, foto2, foto3, foto4, foto5];

const CAROUSEL_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;

export const Camping = () => {
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotosCarrousel.length);
  }, []);

  const startCarousel = useCallback(() => {
    intervalRef.current = setInterval(nextSlide, CAROUSEL_INTERVAL);
  }, [nextSlide]);

  const stopCarousel = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startCarousel();
    return stopCarousel;
  }, [startCarousel, stopCarousel]);

  const handleDotClick = useCallback(
    (index) => {
      stopCarousel();
      setCurrentIndex(index);
      startCarousel();
    },
    [stopCarousel, startCarousel]
  );

  const handleTouchStart = useCallback(
    (e) => {
      stopCarousel();
      setStartX(e.touches[0].clientX);
    },
    [stopCarousel]
  );

  const handleTouchEnd = useCallback(
    (e) => {
      if (startX === null) return;

      const difference = e.changedTouches[0].clientX - startX;

      if (Math.abs(difference) > SWIPE_THRESHOLD) {
        setCurrentIndex((prevIndex) => {
          if (difference > 0) {
            return prevIndex === 0 ? fotosCarrousel.length - 1 : prevIndex - 1;
          }
          return prevIndex === fotosCarrousel.length - 1 ? 0 : prevIndex + 1;
        });
      }

      setStartX(null);
      startCarousel();
    },
    [startX, startCarousel]
  );

  const handleToHistory = () => {
    navigate("/nuestra-historia");
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.campingSection} id="camping">
      {/**Version mobile y tablet */}
      <div className={`${styles.contenedorCampingDesktop} hidden3`}>
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
            Además, desde nuestro campito, ubicado a 1000 metros del pueblo,
            podrás deleitarte con los amaneceres y atardeceres más hermosos,
            contemplando el horizonte sembrado que se extiende hasta donde
            alcanza la vista.
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
      </div>

      {/**Inicio carrousel */}
      <div
        className={`${styles.carrouselCamping} hidden`}
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
              style={{
                width: currentIndex === index ? "20px" : "10px", // PUNTO ACTIVO ES MÁS ANCHO
                borderRadius: currentIndex === index ? "10px" : "50%", // Para que el punto ancho sea más suave
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/**Version dektop */}
    </div>
  );
};
