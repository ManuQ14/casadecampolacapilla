import { useEffect, useState, useRef } from "react";
import styles from "./styles/reviews.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";

import star from "../../../../assets/icons/reviews/star.svg";

export const Opinions = () => {
  const reviews = [
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `La atención de Naty y Nico es muy cordial. Me enamoré de este lugar, es tranquilo y limpio. Es acampe rural, las noches se disfrutan por la paz que hay. Lo super recomiendo, ideal para meditar, llevar el telescopio, para desenchufar con un libro o simplemente contemplando el atardecer. Lo vuelvo a elegir`,
    },
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `¡Descubrí el secreto mejor guardado de Buenos Aires y sus alrededores! La Capilla en Castilla es un verdadero tesoro que supera todas las expectativas.

Lo que hace que este lugar sea truly especial es el servicio, el cuidado y la calidad que ofrecen. Y no solo me refiero a la atención que recibes, sino también a la calidez humana que te brindan sus propietarios, una familia con un corazón enorme.

Desde el momento en que llegas, te hacen sentir como en casa. Se preocupan por tu bienestar y seguridad, y te solucionan cualquier requerimiento que tengas. Y lo mejor de todo es que lo hacen con la mejor onda y una sonrisa.

Además, es admirable su compromiso con la naturaleza y el medio ambiente. Su conciencia y responsabilidad social son un ejemplo a seguir.

En resumen, La Capilla en Castilla ofrece servicios de 5 estrellas, pero yo les daría una estrella Michelin. ¡Recomiendo 150% este lugar! No te pierdas la oportunidad de descubrir este tesoro escondido`,
    },
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `Natalia Carolina Arroyo
 
Excelente espacio.
Al llegar Naty nos recibió maravillosamente mostrandonos todo el lugar y contándonos los servicios con los que cuentan (tomas accesibles, luces en los diferentes sectores, pileta, baño de hombre y de mujeres con duchas con agua caliente las 24hs, fogones, proveduria e incluso muchas opciones para pedir comida).

El lugar transmite una calma única, ofrece una vista espectacular y se pueden apreciar los sonidos de la naturaleza en todo momento.

Si estas buscando desconectar no dudes en venir!

Para los precios podes comunicarte por Instagram donde ella o su marido te van a saber dar toda la información necesaria.
Área de juegos
Cuentan con 3 piletas para poder refrescarse. Hay hamacas, calesita y mucho para explorar
Baños
En excelente estado, cuenta con duchas las cuales tiene agua caliente las 24hs
Área de pícnic
Ofrece varios espacios donde poder sentarse a disfrutar de la vista tanto como de una comida.`,
    },
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `Excelente lugar!!!  Encontras lo que buscas.  Paz. Tranquilidad. Hospitalidad. Calidez. Y sobre todo. Una gran historia de Niko y Naty junto a su hermosa hija. (Dueños)  De cómo llegaron al lugar.Hay parrilla. Fogones. Mesas. 24 hs de agua caliente. Hay una pequeña proveeduría. Se puede pedir menú del día. Hay una carta variada de comida casera.  Productos regionales. Alquilan carpa. Wifi. Todo perfecto!!!!`,
    },
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `Excelente lugar para acampar, descansar o simplemente pasar el día. Cuenta con proveeduría, baños con agua caliente, lugares para acampar cómodamente y piletas para los días de calor. La atención fue súper cálida y amable. Lo recomiendo 100% para descansar y desconectar de todo sin otros ruidos que no sean los de la naturaleza`,
    },
    {
      stars: 5,
      name: `Florencia Muñoz`,
      review: `Muy lindo camping, lugar muy tranquilo. Buena sombra para acampar. Los dueños son excelentes! Hay algunas opciones de comida casera, proveeduría a muy buen precio. Venta de productos locales como miel, mermelada, dulce de leche, etc `,
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
              <p className={styles.nameReview}>{review.name}</p>
              <p className={styles.reviewText}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
