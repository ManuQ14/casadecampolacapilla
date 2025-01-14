import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";

export const Opinions = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = "ChIJa9a-wxhUuZURWP9hFWNy2Wc"; // Place ID de "Casa de Campo La Capilla"

  useEffect(() => {
    const loadGoogleMapsReviews = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        placeId: placeId,
        fields: ["name", "rating", "reviews", "user_ratings_total", "geometry", "formatted_address"],
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const reviewsWithTranslations = place.reviews.map((review) => ({
            ...review,
            text: review.translations?.[0]?.text || review.text, // Usa la traducción si está disponible
          }));
          const sortedReviews = reviewsWithTranslations.sort((a, b) => b.time - a.time); // Ordena por fecha (más recientes primero)
          setReviews(sortedReviews.slice(0, 5)); // Muestra solo las 5 reseñas más recientes
        } else {
          console.error("Error fetching place details:", status);
        }
      });
    };

    if (window.google && window.google.maps) {
      loadGoogleMapsReviews();
    } else {
      console.error("Google Maps API failed to load.");
    }
  }, []);

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

      <div>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index}>
              <p>
                <strong>{review.author_name}</strong> - {review.rating}{" "}
                estrellas
              </p>
              <p>{review.text}</p>
              <p>{new Date(review.time * 1000).toLocaleDateString()}</p>{" "}
              {/* Muestra la fecha en formato legible */}
              <hr />
            </div>
          ))
        ) : (
          <p>Cargando opiniones...</p>
        )}
      </div>
    </div>
  );
};
