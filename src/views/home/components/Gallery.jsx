import { useState } from "react";

import styles from "../styles/home.module.scss";
import line from "../../../assets/icons/subray.svg";

//Imports de fotos
import foto1 from "../../../assets/images/gallery/1.jpg";
import foto2 from "../../../assets/images/gallery/2.jpg";
import foto3 from "../../../assets/images/gallery/3.jpg";
import foto4 from "../../../assets/images/gallery/4.jpg";
import foto5 from "../../../assets/images/gallery/5.jpg";
import foto6 from "../../../assets/images/gallery/6.jpg";
import foto7 from "../../../assets/images/gallery/7.jpg";
import foto8 from "../../../assets/images/gallery/8.jpg";

//Array de fotos
const fotosGaleria = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fotosGaleria.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fotosGaleria.length);
  };

  return (
    <div className={styles.gallerySection}>
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
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fotosGaleria[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className={styles.fotoAbierta}
            />

            <button className={styles.prevButton} onClick={prevSlide}>
              ‹
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
              ›
            </button>
          </div>
          <div className={styles.closeButton} onClick={closeModal}>
            Cerrar
          </div>
        </div>
      )}
    </div>
  );
};
