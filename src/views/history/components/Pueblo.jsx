import { useRef, useState, useCallback, useEffect } from "react";
import styles from "../styles/history.module.scss";
import subrayLine from "../../../assets/icons/subrayOrange.svg";
import foto4 from "../../../assets/images/galleryHistory/4.jpg";
import foto5 from "../../../assets/images/galleryHistory/5.jpg";
import foto6 from "../../../assets/images/galleryHistory/6.jpg";
import foto7 from "../../../assets/images/galleryHistory/7.jpg";
import foto8 from "../../../assets/images/galleryHistory/8.jpg";

const CAROUSEL_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;
const PHOTOS = [foto4, foto5, foto6, foto7, foto8];

export const Pueblo = () => {
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PHOTOS.length);
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
            return prevIndex === 0 ? PHOTOS.length - 1 : prevIndex - 1;
          }
          return prevIndex === PHOTOS.length - 1 ? 0 : prevIndex + 1;
        });
      }

      setStartX(null);
      startCarousel();
    },
    [startX, startCarousel]
  );

  return (
    <div className={styles.puebloContainer}>
      <div className={styles.desktopBoxContainer}>
        <header className={styles.subtitleContainerHistory}>
          <h2 className={styles.h2}>El Pueblo</h2>
          <img
            src={subrayLine}
            alt="linea subrayadora de subtitulo"
            className={styles.line}
          />
        </header>

        <section className={styles.textoPuebloContainer}>
          Fundado en 1895, Castilla, con 600 habitantes, es conocido como la
          Capital Nacional de la Amistad por el legado del granadero de San
          Martín, Rabuffi. Thomas Keating de origen irlandés fue quién donó las
          tierras para la construcción de la estación de tren. <br />
          <br />
          En su mejor época, el pueblo que albergaba 2000 habitantes, fue un
          próspero centro de producción de miel, ganado y conejos. Aunque las
          fábricas cerraron, las historias de ese pasado glorioso aún viven en
          sus rincones.
          <br />
          <br />
          Hoy, Castilla combina tradición y servicios esenciales: escuela,
          hospital, bomberos y la estación ferroviaria activa. Ofrece almacenes,
          panaderías, una forrajería-museo, y destacados artesanos que elaboran
          productos de cuero, macramé ponchos, mates y muebles de diseño.
          <br />
          <br />A pocos kilómetros, tenemos los pueblos vecinos de Rawson a 13
          km y Rivas a 15 km, pueblos que fueron fundados gracias a la llegada
          del tren Pacífico
        </section>
      </div>
      <section
        className={styles.carrouselCamping}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageWrapper}>
          {PHOTOS.map((foto, index) => (
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
          {PHOTOS.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
