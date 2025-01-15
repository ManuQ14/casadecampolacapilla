import { useEffect, useState, useRef } from "react";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";

import star from "../../../assets/icons/star.svg";

export const Opinions = () => {
  const reviews = [
    {
      stars: 5,
      review: `La atención de Naty y Nico es muy cordial. Me enamoré de este lugar, es tranquilo y limpio. Es acampe rural, las noches se disfrutan por la paz que hay. Lo super recomiendo, ideal para meditar, llevar el telescopio, para desenchufar con un libro o simplemente contemplando el atardecer. Lo vuelvo a elegir`,
    },
    {
      stars: 5,
      review: `Un camping para descansar, totalmente tranquilo y con buena gente. Con muy buena atención y amabilidad`,
    },
    {
      stars: 5,
      review: `Excelente experiencia! Todas las comodidades! Agua caliente, alquiler de carpas, colchones y frazadas, parrillas y espacios de fuego, venta de comidas, luz y alargues con zapatilla! Y lo mejor de todo, la calidad humana que transmite su familia al lugar del camping para que lo disfrutes a pleno!`,
    },
    {
      stars: 5,
      review: `Excelente lugar!!!  Encontras lo que buscas.  Paz. Tranquilidad. Hospitalidad. Calidez. Y sobre todo. Una gran historia de Niko y Naty junto a su hermosa hija. (Dueños)  De cómo llegaron al lugar.Hay parrilla. Fogones. Mesas. 24 hs de agua caliente. Hay una pequeña proveeduría. Se puede pedir menú del día. Hay una carta variada de comida casera.  Productos regionales. Alquilan carpa. Wifi. Todo perfecto!!!!`,
    },
    {
      stars: 5,
      review: `Excelente lugar para acampar, descansar o simplemente pasar el día. Cuenta con proveeduría, baños con agua caliente, lugares para acampar cómodamente y piletas para los días de calor. La atención fue súper cálida y amable. Lo recomiendo 100% para descansar y desconectar de todo sin otros ruidos que no sean los de la naturaleza`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null); // useRef para manejar el intervalo sin perder la referencia

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000); // Cambia la velocidad de rotación en milisegundos (5000 = 5 segundos)
    }

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar o al pausar
  }, [isPaused, reviews.length]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
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
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }
    setStartX(null);
    startCarousel(); // Reinicia el intervalo después del touch
  };

  return (
    <div className={styles.sectionOpiniones}>
      <div className={styles.subtitleContainerOpiniones}>
        <h2 className={styles.h2}>Lo que dicen nuestros visitantes</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>

      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onTouchStart={handlePause && handleTouchStart}
        onMouseEnter={handlePause}
        onTouchEnd={handleResume && handleTouchEnd}
        onMouseLeave={handleResume}

        //onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.starContainer}>
                {[...Array(review.stars)].map((_, i) => (
                  <img key={i} src={star} className={styles.starIcon} />
                ))}
              </div>
              <p className={styles.reviewText}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
