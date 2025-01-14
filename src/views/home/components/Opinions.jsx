import { useEffect, useState } from "react";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";

export const Opinions = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
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
              <p>{new Date(review.time * 1000).toLocaleDateString()}</p>
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