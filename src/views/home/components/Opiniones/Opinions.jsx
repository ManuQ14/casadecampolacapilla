import { useState, useRef } from "react";
import styles from "./styles/reviews.module.scss";
import line from "../../../../assets/icons/subrayOrange.svg";
import star from "../../../../assets/icons/reviews/star.svg";

const TRUNCATE_LENGTH = 150; // Número de caracteres para truncar

export const Opinions = () => {
  const reviews = [
    {
      stars: 5,
      name: "Natalia Carolina Arroyo",
      review: `Excelente espacio. Al llegar Naty nos recibió maravillosamente mostrandonos todo el lugar y contándonos los servicios con los que cuentan (tomas accesibles, luces en los diferentes sectores, pileta, baño de hombre y de mujeres con duchas con agua caliente las 24hs, fogones, proveduria e incluso muchas opciones para pedir comida).
      El lugar transmite una calma única, ofrece una vista espectacular y se pueden apreciar los sonidos de la naturaleza en todo momento.
      Si estas buscando desconectar no dudes en venir!
      Para los precios podes comunicarte por Instagram donde ella o su marido te van a saber dar toda la información necesaria.
      Área de juegos: Cuentan con 3 piletas para poder refrescarse. Hay hamacas, calesita y mucho para explorar
      Baños: En excelente estado, cuenta con duchas las cuales tiene agua caliente las 24hs
      Área de pícnic: Ofrece varios espacios donde poder sentarse a disfrutar de la vista tanto como de una comida.`,
    },
    {
      stars: 5,
      name: "Val Corbetto",
      review: `Excelente lugar para pasar unos días de campo, rodeado de naturaleza y atendido por una familia súper esmerados en dar la mejor experiencia a sus visitantes. Volveré sin duda!!! Súper recomendable.`,
    },
    {
      stars: 5,
      name: "María Belén Soto",
      review: `Un lugar ideal para escaparse unos días y recargar energías. El tren desde Retiro sale a las 18:15 y llegás a las 22. Apenas llegás, te reciben con algo para comer si lo necesitás, y desde ahí todo es comodidad y buena onda.
      Lo más lindo es cómo te reciben Nico, Naty y sus hijas. Te pasan a buscar por la estación y te hacen sentir parte de su familia desde el primer momento. Siempre están atentos a que no te falte nada y tienen una calidez que no se encuentra todos los días.
      El pueblo de Castilla es una maravilla: pura tranquilidad, paisajes que te llenan de paz y unos atardeceres que te dejan sin palabras. Todo está cuidado hasta el último detalle. Sin dudas, un lugar para recomendar y volver.`,
    },
    {
      stars: 5,
      name: "Gastón Luna",
      review: `Amabilidad, te ofrecen todo lo que necesitas para estar bien, tranquilo.  Alquilan carpas, camas, frazadas, te dan lo que necesites para cocinar. Nico y Naty están presupuestos ayudarte en todo momento. Excelente la vista de las estrellas. IMPRESIONANTE !`,
    },
    {
      stars: 5,
      name: "Fernando Peroña",
      review:
        "Fuimos. Pasar el 30/31 y 1 Ro de enero al camping.. y vivimos una experiencia hermosa.. todas las comodidades y la mejor atención de Nico y Nati.. los dueños .. unos genios los 2 .. toda la amabilidad y súper serviciales.. el lugar es muy tranquilo y en un entorno mágico.. la noche estrellada es l frutilla del poste de esos hermosas días . El 31 después de las 12 fuimos a hacer una caravana por el pueblo invitados x los dueños.. que fue una experiencia hermosa para nuestros hijos y sobrinos.. muchas gracias x todo.. sin duda volveremos pronto!!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState({});
  const [startX, setStartX] = useState(null);
  const carouselRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const difference = endX - startX;
    if (Math.abs(difference) > 50) {
      if (difference > 50) {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
      } else if (difference < -50) {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }
      setExpandedReviews({}); // Colapsa todas al hacer swipe
    }
    setStartX(null);
  };

  const toggleExpand = (index) => {
    setExpandedReviews((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Función para obtener el texto a mostrar
  const getDisplayText = (text, expanded) => {
    if (expanded || text.length <= TRUNCATE_LENGTH) {
      return text;
    }
    return text.substring(0, TRUNCATE_LENGTH) + "...";
  };

  return (
    <div className={styles.sectionOpiniones}>
      <div className={styles.subtitleContainerOpiniones}>
        <h2 className={styles.h2}>EXPERIENCIAS DE NUESTROS VISITANTES</h2>
        <img
          src={line}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>

      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => {
            const isExpanded = expandedReviews[index];
            const isLong = review.review.length > TRUNCATE_LENGTH;
            const displayText = getDisplayText(review.review, isExpanded);
            return (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.starContainer}>
                  {[...Array(review.stars)].map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      className={styles.starIcon}
                      alt="star"
                    />
                  ))}
                </div>
                <p className={styles.nameReview}>{review.name}</p>
                <p className={styles.reviewText}>
                  {displayText}
                  {isLong && (
                    <span
                      className={styles.toggleInline}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                    >
                      {isExpanded ? " Ver menos" : " Ver más"}
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.dots}>
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
