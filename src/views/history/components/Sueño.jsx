import { useRef, useState, useCallback, useEffect } from "react";
import styles from "../styles/history.module.scss";
import subrayLine from "../../../assets/icons/subrayOrange.svg";
import foto1 from "../../../assets/images/galleryHistory/1.jpg";


const CAROUSEL_INTERVAL = 5000;
const SWIPE_THRESHOLD = 50;
const fotos = [foto1/* , foto2, foto3*/] ;

export const Sueño = () => {
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos.length);
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
            return prevIndex === 0 ? fotos.length - 1 : prevIndex - 1;
          }
          return prevIndex === fotos.length - 1 ? 0 : prevIndex + 1;
        });
      }

      setStartX(null);
      startCarousel();
    },
    [startX, startCarousel]
  );

  return (
    <div className={styles.unSueñoContainer}>
      <div className={styles.desktopBoxContainer}>
        <header className={styles.subtitleContainerHistory}>
          <h2 className={styles.h2}>Un Sueño</h2>
          <img
            src={subrayLine}
            alt="linea subrayadora de subtitulo"
            className={styles.line}
          />
        </header>

        <section className={styles.textoSueñoContainer}>
          <p>
            Hola! Somos Nati y Nico los anfitriones de Casa de Campo La Capilla.
            Nos conocimos en el 2008 y desde allí comenzamos a proyectar nuestra
            vida como familia viajera. De novios amábamos recorrer pueblos y
            lugares de nuestra bella Argentina, hasta que finalmente encontramos
            nuestro lugar en el mundo en Castilla.
          </p>
          <br />
          <p>
            Comenzamos pensando en nuestro espacio para proyectarlo a largo
            plazo como un lugar de descanso para quienes buscan salir del apuro
            y del ruido de la ciudad, y poder vivir esta experiencia rural así
            como nosotros la disfrutamos.
          </p>
          <br />
          <p>
            Con pandemia de por medio y casi sin pensarlo decidimos que era el
            momento oportuno de dejarlo todo e ir a vivir al campo. Desde aquí,
            empezamos a ver que era solo cuestión de animarnos y apostar a este
            emprendimiento familiar con mucho cariño y pasión podía salir
            adelante siempre que se mantenga la esencia de la Experiencia Rural.
          </p>
          <br />
          <p>
            Hoy siendo ya cuatro, junto con nuestras hijitas Milena y Jazmin, te
            recibiremos con los brazos abiertos para tu experiencia sea
            relajante y placentera.
          </p>
        </section>
      </div>
      <section
        className={styles.carrouselCamping}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.imageWrapper}>
          {fotos.map((foto, index) => (
            <img
              key={index}
              src={foto}
              alt={`Imagen ${index + 1}`}
              className={`${styles.image} ${
                currentIndex === index ? styles.activeDos : ""
              }`}
            />
          ))}
        </div>
        <div className={styles.dots2}>
          {fotos.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot2} ${
                currentIndex === index ? styles.activeDot2 : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
