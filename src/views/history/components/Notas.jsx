import styles from "../styles/history.module.scss";

import subrayLine from "../../../assets/icons/subrayOrange.svg";
import openLink from "../../../assets/icons/openLink.svg";
import foto4 from "../../../assets/images/fotoNotas/fotoNota4.jpeg";
import foto5 from "../../../assets/images/fotoNotas/fotoNota5.jpeg";

const PRESS_NOTES = [
  {
    id: 1,
    titulo:
      '"Duermen en un antiguo Gallinero mientras construyen un complejo turístico"',
    foto: "https://img.youtube.com/vi/WGwosA9222c/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WGwosA9222c&feature=youtu.be",
    altText: "Foto del antiguo Gallinero convertido en alojamiento",
  },
  {
    id: 2,
    titulo: '"Primer video de La Casa Viajera"',
    foto: "https://img.youtube.com/vi/QXtA2QT3_nQ/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=QXtA2QT3_nQ&ab_channel=LACASAVIAJERA",
    altText: "Captura del primer video de La Casa Viajera",
  },
  {
    id: 3,
    titulo:
      '"Castilla: Localidad de Chacabuco de la Provincia de Buenos Aires"',
    foto: "https://img.youtube.com/vi/HC0dSwjEu94/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=HC0dSwjEu94&ab_channel=TelediarioDigital",
    altText: "Vista de la localidad de Castilla",
  },
  {
    id: 4,
    titulo:
      '"En tren, micro o auto, destinos muy cerquita de Caba para despejarse, comer rico, descans..."',
    foto: foto4,
    url: "https://elle.clarin.com/estilo-de-vida/salidas/salidas-escapadas-destinos_0_IQP0XsX5f3.html#",
    altText: "Imagen de destinos cercanos a CABA",
  },
  {
    id: 5,
    titulo: '"Nota periodística Radio Eclipse 104.3"',
    foto: foto5,
    url: "https://www.facebook.com/share/v/18VHDzssJv/",
    altText: "Imagen de la entrevista en Radio Eclipse",
  },
  {
    id: 6,
    titulo:
      '"Cumpliendo sus sueños, la historia de Niko y Naty y la importancia de cicloturismo para el pueblito"',
    foto: "https://img.youtube.com/vi/IAqsgr2MLD8/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=IAqsgr2MLD8&ab_channel=coreanoezequiel",
    altText: "Foto de Niko y Naty con sus bicicletas",
  },
];

export const Notas = () => {
  return (
    <section className={styles.notaSection}>
      <header className={`${styles.subtitleContainerNotas} hidden`}>
        <h2 className={styles.h2Notas}>Notas periodísticas y entrevistas</h2>
        <img
          src={subrayLine}
          alt="Línea decorativa bajo el subtítulo"
          className={styles.line}
        />
      </header>

      <div className={`${styles.containerNotas} `}>
        {PRESS_NOTES.map((nota) => (
          <article
            key={nota.id}
            className={`${styles.boxContainerNota} hidden`}
          >
            <a
              href={nota.url}
              className={styles.linkTituloNotaContainer}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nota.titulo}
            >
              <img
                src={nota.foto}
                alt={nota.altText}
                className={styles.imagenNota}
                loading="lazy"
              />
              <div className={styles.containerLinkTitle}>
                <h3 className={styles.tituloNota}>{nota.titulo}</h3>
                <img src={openLink} alt="" className={styles.iconLink} />
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
