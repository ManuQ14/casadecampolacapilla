import { useState, useRef } from "react";
import styles from "../styles/home.module.scss";

const opiniones = [
  {
    nombre: "Camila",
    texto:
      "La atención de Naty y Nico es muy cordial. Me enamoré de este lugar, es tranquilo y limpio. Es acampe rural, las noches se disfrutan por la paz que hay. Lo super recomiendo, ideal para meditar, llevar el telescopio, para desenchufar con un libro o simplemente contemplando el atardecer. Lo vuelvo a elegir",
  },
  {
    nombre: "Manuel",
    texto:
      "Un lugar espectacular para desconectarse del mundo. Las vistas son increíbles y la tranquilidad se siente en cada rincón...",
  },
  {
    nombre: "Susana",
    texto:
      "La paz de este lugar es incomparable. Ideal para relajarse, leer y disfrutar del entorno natural.",
  },
];

export const Opinions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragEndX, setDragEndX] = useState(0);
  const sliderRef = useRef(null);

  const handleDragStart = (e) => {
    const startX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setDragStartX(startX);
  };

  const handleDragEnd = (e) => {
    const endX = e.type === "touchend" ? dragEndX : e.clientX;
    const delta = dragStartX - endX;

    if (delta > 50) {
      // Mover a la derecha
      setCurrentIndex((prevIndex) =>
        prevIndex === opiniones.length - 1 ? 0 : prevIndex + 1
      );
    } else if (delta < -50) {
      // Mover a la izquierda
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? opiniones.length - 1 : prevIndex - 1
      );
    }

    // Reiniciar posiciones
    setDragStartX(0);
    setDragEndX(0);
  };

  const handleDragMove = (e) => {
    const moveX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    setDragEndX(moveX);
  };

  return (
    <div className={styles.sectionOpiniones}>
      <h2 className={styles.h2Opiniones}>Opiniones de nuestros acampantes</h2>
      <div
        className={styles.sliderContainer}
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onMouseMove={(e) => dragStartX !== 0 && handleDragMove(e)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {opiniones.map((opinion, index) => (
            <div className={styles.slide} key={index}>
              <h4 className={styles.nameOpinion}>{opinion.nombre}</h4>
              <p className={styles.opinion}>{opinion.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
