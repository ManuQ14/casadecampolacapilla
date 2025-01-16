import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";

import foto1 from "../../../assets/images/gallery/9.jpg";
import foto2 from "../../../assets/images/gallery/2.jpg";
import foto3 from "../../../assets/images/gallery/3.jpg";
import foto4 from "../../../assets/images/gallery/4.jpg";
import foto5 from "../../../assets/images/gallery/5.jpg";
import foto6 from "../../../assets/images/gallery/6.jpg";
import foto7 from "../../../assets/images/gallery/7.jpg";
import foto8 from "../../../assets/images/gallery/8.jpg";

const fotosGaleria = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [fadeTransition, setFadeTransition] = useState(false);
  const navigate = useNavigate();

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setTimeout(() => {
      setFadeTransition(true); // Activa la transición al abrir
    }, 0);
  };

  const closeModal = () => {
    setFadeTransition(false); // Desactiva la transición antes de cerrar
    setTimeout(() => setIsModalOpen(false), 300); // Espera a que termine la animación
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const difference = endX - startX;

    if (difference > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? fotosGaleria.length - 1 : prevIndex - 1
      );
    } else if (difference < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === fotosGaleria.length - 1 ? 0 : prevIndex + 1
      );
    }
    setStartX(null);
  };

  const handleGoToGallery = () => {
    navigate("/galeria");
  };

  return (
    <div className={styles.gallerySection} >
      {isModalOpen && (
        <div className={`${styles.modalOverlay}`} id="modalGaleria" onMouseDown={closeModal}>
          <div
            className={`${styles.modalContent} ${
              fadeTransition ? styles.fadeIn : ""
            }`}
            onClick={(e) => e.stopPropagation()}
            id="modalContent"
          >
            {fotosGaleria.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Imagen ${index + 1}`}
                className={`${styles.fotoAbierta} ${
                  currentIndex === index ? styles.active : ""
                }`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              />
            ))}

            <div className={styles.closeButton} onClick={closeModal}>
              X
            </div>
          </div>
        </div>
      )}
      <div className={styles.subtitleContainer}>
        <h2 className={styles.h2}>Galería</h2>
        <img src={line} alt="linea subrayadora" />
      </div>
      <div className={styles.gallery}>
        {fotosGaleria.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Imagen ${index + 1}`}
            className={styles.galleryImage}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <div className={styles.goToGalleryContainer} onClick={handleGoToGallery}>
        <div className={styles.goToGallery}>Ver galería</div>
      </div>
    </div>
  );
};
