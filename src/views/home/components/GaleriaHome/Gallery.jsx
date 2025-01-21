import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/galleryHome.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";
import closeButton from "../../../../assets/icons/iconsBurguerMenu/closeMenu.svg";

import foto1 from "../../../../assets/images/galleryHome/9.jpg";
import foto2 from "../../../../assets/images/galleryHome/2.jpg";
import foto3 from "../../../../assets/images/galleryHome/3.jpg";
import foto4 from "../../../../assets/images/galleryHome/4.jpg";
import foto5 from "../../../../assets/images/galleryHome/5.jpg";
import foto6 from "../../../../assets/images/galleryHome/6.jpg";
import foto7 from "../../../../assets/images/galleryHome/7.jpg";
import foto8 from "../../../../assets/images/galleryHome/8.jpg";

const GALLERY_PHOTOS = [
  { id: 1, src: foto1, alt: "Vista de la casa" },
  { id: 2, src: foto2, alt: "Paisaje del campo" },
  { id: 3, src: foto3, alt: "Interior de la casa" },
  { id: 4, src: foto4, alt: "Área exterior" },
  { id: 5, src: foto5, alt: "Amanecer en el campo" },
  { id: 6, src: foto6, alt: "Instalaciones" },
  { id: 7, src: foto7, alt: "Vista panorámica" },
  { id: 8, src: foto8, alt: "Atardecer en el campo" },
];

export const Gallery = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    fadeTransition: false,
  });
  const [startX, setStartX] = useState(null);
  const navigate = useNavigate();

  const hanldeToMainGallery = () => {
    navigate("/galeria");
    document.body.classList.remove("no-scroll");

    window.scrollTo({
      top: 0,
    });
  };

  const openModal = useCallback((index) => {
    setModalState({ isOpen: true, currentIndex: index, fadeTransition: false });
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      setModalState((prev) => ({ ...prev, fadeTransition: true }));
    }, 0);
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, fadeTransition: false }));
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      setModalState((prev) => ({ ...prev, isOpen: false }));
    }, 300);
  }, []);

  const handleSwipe = useCallback(
    (e) => {
      if (startX === null) return;
      const difference = e.changedTouches[0].clientX - startX;
      const threshold = 50;

      if (Math.abs(difference) > threshold) {
        setModalState((prev) => ({
          ...prev,
          currentIndex:
            difference > 0
              ? prev.currentIndex === 0
                ? GALLERY_PHOTOS.length - 1
                : prev.currentIndex - 1
              : prev.currentIndex === GALLERY_PHOTOS.length - 1
              ? 0
              : prev.currentIndex + 1,
        }));
      }
      setStartX(null);
    },
    [startX]
  );

  return (
    <section className={styles.gallerySection} id="galeria">
      {modalState.isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modalContent} ${
              modalState.fadeTransition ? styles.fadeIn : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {GALLERY_PHOTOS.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className={`${styles.fotoAbierta} ${
                  modalState.currentIndex === index ? styles.active : ""
                }`}
                onTouchStart={(e) => setStartX(e.touches[0].clientX)}
                onTouchEnd={handleSwipe}
              />
            ))}
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Cerrar galería"
            >
              <img src={closeButton} alt="Cerrar" />
            </button>
          </div>
        </div>
      )}

      <header className={styles.subtitleContainer}>
        <h2 className={styles.h2}>Galería</h2>
        <img src={line} alt="línea decorativa" />
      </header>

      <div className={styles.gallery}>
        {GALLERY_PHOTOS.map((photo, index) => (
          <div key={photo.id} className={styles.imageWrapper}>
            <img
              src={photo.src}
              alt={photo.alt}
              className={styles.galleryImage}
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <button
        className={styles.goToGalleryContainer}
        onClick={hanldeToMainGallery}
      >
        <span className={styles.goToGallery}>Ver galería</span>
      </button>
    </section>
  );
};
