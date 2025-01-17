import { useRef, useState } from "react";

import styles from "../styles/history.module.scss";
import subrayLine from "../../../assets/icons/subrayOrange.svg";

//Import de fotos de carrousel
import foto1 from "../../../assets/images/galleryHistory/1.jpg";
import foto2 from "../../../assets/images/galleryHistory/2.jpg";
import foto3 from "../../../assets/images/galleryHistory/3.jpg";

const fotosSueño = [foto1, foto2, foto3];

export const Sueño = () => {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotosSueño.length);
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
        prevIndex === 0 ? fotosSueño.length - 1 : prevIndex - 1
      );
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === fotosSueño.length - 1 ? 0 : prevIndex + 1
      );
    }
    setStartX(null);
    startCarousel(); // Reinicia el intervalo después del touch
  };

  return (
    <div className={styles.unSueñoContainer}>
      <div className={styles.subtitleContainerHistory}>
        <h2 className={styles.h2}>Un Sueño</h2>
        <img
          src={subrayLine}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>

      <div className={styles.textoSueñoContainer}>
        Hola! Somos Naty y Niko los anfitriones de Casa de Campo La Capilla. Nos
        conocimos en el 2008 y desde allí comenzamos a proyectar nuestra vida
        como familia viajera. <br />
        <br />
        De novios amábamos recorrer pueblos y lugares de nuestra bella
        Argentina, hasta que finalmente encontramos nuestro lugar en el mundo en
        Castilla. Comenzamos pensando en nuestro espacio para proyectarlo a
        largo plazo como un lugar de descanso para quienes buscan salir del
        apuro y del ruido de la ciudad, y poder vivir esta experiencia rural así
        como nosotros la disfrutamos. <br /> <br />
        Con pandemia de por medio y casi sin pensarlo decidimos que era el
        momento oportuno de dejarlo todo e ir a vivir al campo. Desde aquí,
        empezamos a ver que era solo cuestión de animarnos y apostar a este
        emprendimiento familiar con mucho cariño y pasión podía salir adelante
        siempre que se mantenga la esencia de la Experiencia Rural. <br />
        <br />
        Hoy siendo ya cuatro, junto con nuestras hijitas Milena y Jazmin, te
        recibiremos con los brazos abiertos para tu experiencia sea relajante y
        placentera
      </div>
      {/**Inicio carrousel */}
      <div
        className={styles.carrouselCamping}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageWrapper}>
          {fotosSueño.map((foto, index) => (
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
          {fotosSueño.map((_, index) => (
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
