import { useState, useEffect } from "react";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";
import axios from "axios";

export const Opinions = () => {
  const [reviews, setReviews] = useState([]);
  const placeId = "ChIJa9a-wxhUuZURWP9hFWNy2Wc"; // Place ID de "Casa de Campo La Capilla"
  const vercelFunctionUrl = "/api/reviews"; // Reemplaza con la URL de tu función

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(vercelFunctionUrl, {
          params: { placeId: placeId },
        });
        if (response.data && response.data.reviews) {
          setReviews(response.data.reviews);
        } else {
          console.warn("No reviews found in the response");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchReviews();
  }, [vercelFunctionUrl, placeId]);

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
