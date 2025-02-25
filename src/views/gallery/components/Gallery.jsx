import { useState, useCallback } from "react";

import styles from "../styles/galeria.module.scss";

//Import de fotos
import foto1 from "../../../assets/images/galeria/1.jpg";
import foto2 from "../../../assets/images/galeria/2.jpg";
import foto3 from "../../../assets/images/galeria/3.jpg";
import foto4 from "../../../assets/images/galeria/4.jpg";
import foto5 from "../../../assets/images/galeria/5.jpg";
import foto6 from "../../../assets/images/galeria/6.jpg";
import foto7 from "../../../assets/images/galeria/7.jpg";
import foto8 from "../../../assets/images/galeria/8.jpg";
import foto9 from "../../../assets/images/galeria/9.jpg";
import foto10 from "../../../assets/images/galeria/10.jpg";
import foto11 from "../../../assets/images/galeria/11.jpg";
import foto12 from "../../../assets/images/galeria/12.jpg";
import foto13 from "../../../assets/images/galeria/13.jpg";
import foto14 from "../../../assets/images/galeria/14.jpg";
import foto15 from "../../../assets/images/galeria/15.jpg";
import foto16 from "../../../assets/images/galeria/16.jpg";

import arrowLeft from "../../../assets/icons/arrowLeft.svg";
import arrorRight from "../../../assets/icons/arrowRigth.svg";
import arrowLeftHover from "../../../assets/icons/arrowLeftHover.svg";
import arrorRightHover from "../../../assets/icons/arrowRigthHover.svg";
import closeButtonGray from "../../../assets/icons/closeButtonGray.svg";
import closeButtonGrayHover from "../../../assets/icons/closeButtonHoverGray.svg";

const galeryPhotos = [
  { id: 1, src: foto1, alt: "vistas" },
  { id: 2, src: foto2, alt: "vistas" },
  { id: 3, src: foto3, alt: "vistas" },
  { id: 4, src: foto4, alt: "vistas" },
  { id: 5, src: foto5, alt: "vistas" },
  { id: 6, src: foto6, alt: "vistas" },
  { id: 7, src: foto7, alt: "vistas" },
  { id: 8, src: foto8, alt: "vistas" },
  { id: 9, src: foto9, alt: "vistas" },
  { id: 10, src: foto10, alt: "vistas" },
  { id: 11, src: foto11, alt: "vistas" },
  { id: 12, src: foto12, alt: "vistas" },
  { id: 13, src: foto13, alt: "vistas" },
  { id: 14, src: foto14, alt: "vistas" },
  { id: 15, src: foto15, alt: "vistas" },
  { id: 16, src: foto16, alt: "vistas" },
];

export const Gallery = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    fadeTransition: false,
  });
  const [startX, setStartX] = useState(null);
  const [closeHover, setCloseHover] = useState(false);

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
          ? galeryPhotos.length - 1
          : prev.currentIndex - 1,
    }));
  };

  const handleModalNext = () => {
    setModalState((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === galeryPhotos.length - 1
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
                ? galeryPhotos.length - 1
                : prev.currentIndex - 1
              : prev.currentIndex === galeryPhotos.length - 1
              ? 0
              : prev.currentIndex + 1,
        }));
      }
      setStartX(null);
    },
    [startX]
  );

  return (
    <section className={styles.gallerySection}>
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
              src={hoverRight ? arrorRightHover : arrorRight}
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
              alt="Cerrar foto"
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
            {galeryPhotos.map((photo, index) => (
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
            {/* <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Cerrar galería"
            >
              <img src={closeButton} alt="Cerrar" />
            </button> */}
          </div>
        </div>
      )}

      <div className={styles.gallery}>
        {galeryPhotos.map((photo, index) => (
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
    </section>
  );
};
