import styles from "../styles/history.module.scss";
import subrayLine from "../../../assets/icons/subrayOrange.svg";
import foto1 from "../../../assets/images/fotoNotas/fotoNota1.jpeg";
import foto2 from "../../../assets/images/fotoNotas/fotoNota2.jpeg";
import foto3 from "../../../assets/images/fotoNotas/fotoNota3.jpeg";
import foto4 from "../../../assets/images/fotoNotas/fotoNota4.jpeg";
import foto5 from "../../../assets/images/fotoNotas/fotoNota5.jpeg";
import foto6 from "../../../assets/images/fotoNotas/fotoNota6.jpeg";

const PRESS_NOTES = [
  {
    id: 1,
    titulo:
      "Duermen en un antiguo Gallinero mientras construyen un complejo turístico",
    foto: foto1,
    url: "",
    altText: "Foto del antiguo Gallinero convertido en alojamiento",
  },
  {
    id: 2,
    titulo: "Primer video de La Casa Viajera",
    foto: foto2,
    url: "",
    altText: "Captura del primer video de La Casa Viajera",
  },
  {
    id: 3,
    titulo: "Castilla: Localidad de Chacabuco de la Provincia de Buenos Aires",
    foto: foto3,
    url: "",
    altText: "Vista de la localidad de Castilla",
  },
  {
    id: 4,
    titulo:
      "En tren, micro o auto, destinos muy cerquita de Caba para despejarse, comer rico, descans...",
    foto: foto4,
    url: "",
    altText: "Imagen de destinos cercanos a CABA",
  },
  {
    id: 5,
    titulo: "Nota periodística Radio Eclipse 104.3",
    foto: foto5,
    url: "",
    altText: "Imagen de la entrevista en Radio Eclipse",
  },
  {
    id: 6,
    titulo:
      "Cumpliendo sus sueños, la historia de Niko y Naty y la importancia de cicloturismo para el pueblito",
    foto: foto6,
    url: "",
    altText: "Foto de Niko y Naty con sus bicicletas",
  },
];

export const Notas = () => {
  return (
    <section className={styles.notaSection}>
      <header className={styles.subtitleContainerNotas}>
        <h2 className={styles.h2Notas}>Notas periodísticas y entrevistas</h2>
        <img
          src={subrayLine}
          alt="Línea decorativa bajo el subtítulo"
          className={styles.line}
        />
      </header>

      <div className={styles.containerNotas}>
        {PRESS_NOTES.map((nota) => (
          <article key={nota.id} className={styles.boxContainerNota}>
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
              <h3 className={styles.tituloNota}>{nota.titulo}</h3>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
