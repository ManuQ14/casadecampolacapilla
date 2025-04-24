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
import foto17 from "../../../assets/images/galeria/17.jpg";
import foto18 from "../../../assets/images/galeria/18.jpg";
import foto19 from "../../../assets/images/galeria/19.jpg";
import foto20 from "../../../assets/images/galeria/20.jpg";
import foto21 from "../../../assets/images/galeria/21.jpg";
import foto22 from "../../../assets/images/galeria/22.jpg";
import foto23 from "../../../assets/images/galeria/23.jpg";
import foto24 from "../../../assets/images/galeria/24.jpg";
import foto25 from "../../../assets/images/galeria/25.jpg";
import foto26 from "../../../assets/images/galeria/26.jpg";
import foto27 from "../../../assets/images/galeria/27.jpg";
import foto28 from "../../../assets/images/galeria/28.jpg";
import foto29 from "../../../assets/images/galeria/29.jpg";
import foto30 from "../../../assets/images/galeria/30.jpg";
import foto31 from "../../../assets/images/galeria/31.jpg";
import foto32 from "../../../assets/images/galeria/32.jpg";
import foto33 from "../../../assets/images/galeria/33.jpg";
import foto34 from "../../../assets/images/galeria/34.jpg";
import foto35 from "../../../assets/images/galeria/35.jpg";
import foto36 from "../../../assets/images/galeria/36.jpg";
import foto37 from "../../../assets/images/galeria/37.jpg";
import foto38 from "../../../assets/images/galeria/38.jpg";
import foto39 from "../../../assets/images/galeria/39.jpg";
import foto40 from "../../../assets/images/galeria/40.jpg";
import foto41 from "../../../assets/images/galeria/41.jpg";
import foto42 from "../../../assets/images/galeria/42.jpg";
import foto43 from "../../../assets/images/galeria/43.jpg";
import foto44 from "../../../assets/images/galeria/44.jpg";
import foto45 from "../../../assets/images/galeria/45.jpg";
import foto46 from "../../../assets/images/galeria/46.jpg";
import foto47 from "../../../assets/images/galeria/47.jpg";
import foto48 from "../../../assets/images/galeria/48.jpg";
import foto49 from "../../../assets/images/galeria/49.jpg";

import arrowLeft from "../../../assets/icons/ArrowLeft.svg";
import arrorRight from "../../../assets/icons/arrowRigth.svg";
import arrowLeftHover from "../../../assets/icons/ArrowLeftHover.svg";
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
  { id: 17, src: foto17, alt: "vistas" },
  { id: 18, src: foto18, alt: "vistas" },
  { id: 19, src: foto19, alt: "vistas" },
  { id: 20, src: foto20, alt: "vistas" },
  { id: 21, src: foto21, alt: "vistas" },
  { id: 22, src: foto22, alt: "vistas" },
  { id: 23, src: foto23, alt: "vistas" },
  { id: 24, src: foto24, alt: "vistas" },
  { id: 25, src: foto25, alt: "vistas" },
  { id: 26, src: foto26, alt: "vistas" },
  { id: 27, src: foto27, alt: "vistas" },
  { id: 28, src: foto28, alt: "vistas" },
  { id: 29, src: foto29, alt: "vistas" },
  { id: 30, src: foto30, alt: "vistas" },
  { id: 31, src: foto31, alt: "vistas" },
  { id: 32, src: foto32, alt: "vistas" },
  { id: 33, src: foto33, alt: "vistas" },
  { id: 34, src: foto34, alt: "vistas" },
  { id: 35, src: foto35, alt: "vistas" },
  { id: 36, src: foto36, alt: "vistas" },
  { id: 37, src: foto37, alt: "vistas" },
  { id: 38, src: foto38, alt: "vistas" },
  { id: 39, src: foto39, alt: "vistas" },
  { id: 40, src: foto40, alt: "vistas" },
  { id: 41, src: foto41, alt: "vistas" },
  { id: 42, src: foto42, alt: "vistas" },
  { id: 43, src: foto43, alt: "vistas" },
  { id: 44, src: foto44, alt: "vistas" },
  { id: 45, src: foto45, alt: "vistas" },
  { id: 46, src: foto46, alt: "vistas" },
  { id: 47, src: foto47, alt: "vistas" },
  { id: 48, src: foto48, alt: "vistas" },
  { id: 49, src: foto49, alt: "vistas" },
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
          </div>
        </div>
      )}

      <div className={styles.gallery}>
        {galeryPhotos.map((photo, index) => (
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
    </section>
  );
};
