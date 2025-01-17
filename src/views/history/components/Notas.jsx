import styles from "../styles/history.module.scss";

import subrayLine from "../../../assets/icons/subrayOrange.svg";

//Imports de fotos de notas para el array
import foto1 from "../../../assets/images/fotoNotas/fotoNota1.jpeg";
import foto2 from "../../../assets/images/fotoNotas/fotoNota2.jpeg";
import foto3 from "../../../assets/images/fotoNotas/fotoNota3.jpeg";
import foto4 from "../../../assets/images/fotoNotas/fotoNota4.jpeg";
import foto5 from "../../../assets/images/fotoNotas/fotoNota5.jpeg";
import foto6 from "../../../assets/images/fotoNotas/fotoNota6.jpeg";

const notas = [
  {
    id: 1,
    titulo:
      "“Duermen en un antiguo Gallinero mientras construyen un complejo turístico”",
    foto: foto1,
    url: "",
  },
  {
    id: 2,
    titulo: "“Primer video de La Casa Viajera”",
    foto: foto2,
    url: "",
  },
  {
    id: 3,
    titulo:
      "“Castilla” Localidad de Chacabuco de la Provincia de Buenos Aires”",
    foto: foto3,
    url: "",
  },
  {
    id: 4,
    titulo:
      "“En tren, micro o auto, destinos muy cerquita de Caba para despejarse, comer rico, descans...”",
    foto: foto4,
    url: "",
  },
  {
    id: 5,
    titulo: "Nota periodística Radio Eclipse 104.3",
    foto: foto5,
    url: "",
  },
  {
    id: 6,
    titulo:
      "“Cumpliendo sus sueños, la historia de Niko y Naty y la importancia de cicloturismo para el pueblito”",
    foto: foto6,
    url: "",
  },
];

export const Notas = () => {
  return (
    <div className={styles.notaSection}>
      <div className={styles.subtitleContainerNotas}>
        <h2 className={styles.h2Notas}>Notas periodísticas y entrevistas</h2>
        <img
          src={subrayLine}
          alt="linea subrayadora de subtitulo"
          className={styles.line}
        />
      </div>

      <div className={styles.containerNotas}>
        {notas.map((nota) => (
          <div key={nota.id} className={styles.boxContainerNota}>
            <a href={nota.url} className={styles.linkTituloNotaContainer}>
              <img
                src={nota.foto}
                alt="Foto de la noticia"
                className={styles.imagenNota}
              />

              <h3 className={styles.tituloNota}>{nota.titulo}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
