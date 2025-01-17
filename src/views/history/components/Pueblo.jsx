import { useRef, useState } from "react";

import styles from "../styles/history.module.scss";
import subrayLine from "../../../assets/icons/subrayOrange.svg";

//Import de fotos de carrousel
import foto4 from "../../../assets/images/galleryHistory/4.jpg";
import foto5 from "../../../assets/images/galleryHistory/5.jpg";
import foto6 from "../../../assets/images/galleryHistory/6.jpg";
import foto7 from "../../../assets/images/galleryHistory/7.jpg";
import foto8 from "../../../assets/images/galleryHistory/8.jpg";

const fotosPueblo = [foto4, foto5, foto6, foto7, foto8];

export const Pueblo = () => {
  const intervalRef = useRef(null); // useRef para manejar el intervalo sin perder la referencia

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotosPueblo.length);
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
        prevIndex === 0 ? fotosPueblo.length - 1 : prevIndex - 1
      );
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === fotosPueblo.length - 1 ? 0 : prevIndex + 1
      );
    }
    setStartX(null);
    startCarousel(); // Reinicia el intervalo después del touch
  };

  return (
    <div className={styles.puebloContainer}>
      <div className={styles.subtitleContainerHistory}>
        <h2 className={styles.h2}>El Pueblo</h2>
        <img
          src={subrayLine}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>
      <div className={styles.textoPuebloContainer}>
        Casa de Campo La Capilla te invita a disfrutar de la tranquilidad y los
        sonidos auténticos de la vida rural. Este es un lugar donde la conexión
        con la naturaleza se vive plenamente, y hacemos todo lo posible para que
        no te falte nada durante tu estadía. <br />
        Ofrecemos un servicio de acampe diseñado para que experimentes el
        encanto del campo, acompañado del mejor servicio personalizado. <br />
        <br />
        Además, desde nuestro campito, ubicado al borde del pueblo, podrás
        deleitarte con los amaneceres y atardeceres más hermosos, contemplando
        el horizonte sembrado que se extiende hasta donde alcanza la vista.
      </div>
      {/**Inicio carrousel */}
      <div
        className={styles.carrouselCamping}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageWrapper}>
          {fotosPueblo.map((foto, index) => (
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
          {fotosPueblo.map((_, index) => (
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
