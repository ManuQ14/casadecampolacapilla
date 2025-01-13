import { useState, useEffect } from "react";
import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subray.svg";

/* const opiniones = [
  {
    nombre: "Natalia Edith",
    texto:
      "La atención de Naty y Nico es muy cordial. Me enamoré de este lugar, es tranquilo y limpio. Es acampe rural, las noches se disfrutan por la paz que hay. Lo super recomiendo, ideal para meditar, llevar el telescopio, para desenchufar con un libro o simplemente contemplando el atardecer. Lo vuelvo a elegir",
  },
  {
    nombre: "Norma Benitez",
    texto:
      "Un camping para descansar, totalmente tranquilo y con buena gente. Con muy buena atención y amabilidad",
  },
  {
    nombre: "Agustina Ramirez",
    texto:
      "Excelente experiencia! Todas las comodidades! Agua caliente, alquiler de carpas, colchones y frazadas, parrillas y espacios de fuego, venta de comidas, luz y alargues con zapatilla! Y lo mejor de todo, la calidad humana que transmite su familia al lugar del camping para que lo disfrutes a pleno!",
  },
  {
    nombre: "Alan B.",
    texto:
      "Excelente lugar!!! Encontrás lo que buscás: Paz, tranquilidad, hospitalidad, calidez y sobre todo una gran historia de Niko y Naty junto a su hermosa hija (dueños) de cómo llegaron al lugar. Hay parrilla, fogones, mesas, 24hs de agua caliente. Hay una pequeña proveeduría. Se puede pedir menú del día. Hay una carta variada de comida casera. Productos regionales, alquilan carpa, wifi. Todo perfecto!!!",
  },
  {
    nombre: "Lucas G.",
    texto:
      "Excelente lugar para acampar, descansar o simplemente pasar el día. Cuenta con proveeduría, baños con agua caliente, lugares para acampar cómodamente y piletas para los días de calor. La atención fue super cálida y amable. Lo recomiendo 100% para descansar y desconectar de todo sin otros ruidos que no sean los de la naturaleza",
  },
]; */

export const Opinions = () => {
  const [reviews, setReviews] = useState([]);
  const cloudRunUrl = `https://southamerica-west1-kinetic-road-447715-s7.cloudfunctions.net/fetch-google-maps-data`; // Reemplaza con tu URL

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(cloudRunUrl);
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();

        if (data.result && data.result.reviews) {
          const sortedReviews = data.result.reviews.sort(
            (a, b) => b.time - a.time
          ); // Ordena por fecha (más recientes primero)
          const limitedReviews = sortedReviews.slice(0, 5); // Limita a 5 reseñas
          setReviews(limitedReviews); // Guarda solo las 5 opiniones más recientes
        } else {
          console.warn("No reviews found in the response");
        }
        
      } catch (error) {
        console.error("Error:", error.message);
      }

      
    };

    fetchReviews();

    
  }, [cloudRunUrl]);

  

  /*   const [currentIndex, setCurrentIndex] = useState(0);
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
  }; */

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
      <div id="reviewsContainer">
        {reviews.slice(0, 5).map((review, index) => (
          <div key={index}>
            <p>
              <strong>{review.author_name}</strong> - {review.rating} estrellas
            </p>
            <p>{review.text}</p>
            <hr />
          </div>
        ))}
      </div>

      {/* <div
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
      </div> */}
    </div>
  );
};
