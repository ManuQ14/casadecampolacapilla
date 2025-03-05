import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/galleryHome.module.scss";

import line from "../../../../assets/icons/subrayOrange.svg";
import closeButtonGray from "../../../../assets/icons/closeButtonGray.svg";
import closeButtonGrayHover from "../../../../assets/icons/closeButtonHoverGray.svg";

import arrowLeft from "../../../../assets/icons/ArrowLeft.svg";
import arrowRight from "../../../../assets/icons/arrowRigth.svg";
import arrowLeftHover from "../../../../assets/icons/ArrowLeftHover.svg";
import arrowRightHover from "../../../../assets/icons/arrowRigthHover.svg";

import foto1 from "../../../../assets/images/galeria/1.jpg";
import foto2 from "../../../../assets/images/galeria/2.jpg";
import foto3 from "../../../../assets/images/galeria/3.jpg";
import foto4 from "../../../../assets/images/galeria/4.jpg";
import foto5 from "../../../../assets/images/galeria/5.jpg";
import foto6 from "../../../../assets/images/galeria/6.jpg";
import foto7 from "../../../../assets/images/galeria/7.jpg";
import foto8 from "../../../../assets/images/galeria/8.jpg";

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
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [closeHover, setCloseHover] = useState(false);

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

  // Funciones para navegación en modal
  const handleModalPrev = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0
          ? GALLERY_PHOTOS.length - 1
          : prev.currentIndex - 1,
    }));
  };

  const handleModalNext = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === GALLERY_PHOTOS.length - 1
          ? 0
          : prev.currentIndex + 1,
    }));
  };

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
    <section className={`${styles.gallerySection}`} id="galeria">
      {modalState.isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          {/* Botones de navegación en el modal */}
          <div className={styles.modalNavButtons}>
            <img
              src={hoverLeft ? arrowLeftHover : arrowLeft}
              alt="Anterior"
              className={styles.modalNavButton}
              onClick={(e) => {
                e.stopPropagation();
                handleModalPrev();
              }}
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
            />
            <img
              src={hoverRight ? arrowRightHover : arrowRight}
              alt="Siguiente"
              className={styles.modalNavButton}
              onClick={(e) => {
                e.stopPropagation();
                handleModalNext();
              }}
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
            />
          </div>
          <button
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Cerrar galería"
          >
            <img
              src={closeHover ? closeButtonGrayHover : closeButtonGray}
              alt="Cerrar  foto"
              onMouseEnter={() => setCloseHover(true)}
              onMouseLeave={() => setCloseHover(false)}
            />
          </button>
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
          </div>
        </div>
      )}

      <header className={`${styles.subtitleContainer} hidden`}>
        <h2 className={styles.h2}>Galería</h2>
        <img src={line} alt="línea decorativa" />
      </header>

      <div className={`${styles.gallery} hidden`}>
        {GALLERY_PHOTOS.map((photo, index) => (
          <div key={photo.id} className={`${styles.imageWrapper} hidden3`}>
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
        <span className={`${styles.goToGallery} hidden`}>Ver galería</span>
      </button>
    </section>
  );
};
