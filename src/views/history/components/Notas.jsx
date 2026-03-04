import styles from "../styles/history.module.scss";

import subrayLine from "../../../assets/icons/subrayOrange.svg";
import openLink from "../../../assets/icons/openLink.svg";
import foto4 from "../../../assets/images/fotoNotas/fotoNota4.jpeg";
import foto5 from "../../../assets/images/fotoNotas/fotoNota5.jpeg";
import foto7 from "../../../assets/images/fotoNotas/fotoNota7.jpg";

const PRESS_NOTES = [
  {
    id: 7,
    titulo:
      'Un motor fundamental en el renacimiento de Castilla fue el emprendimiento "Casa de Campo La Capilla"',
    foto: foto7,
    url: "https://www.eldestapeweb.com/sociedad/escapadas/que-hacer-en-castilla-el-pequeno-pueblo-que-queda-a-dos-horas-de-caba-20263413542",
    altText: "Foto del molino del Camping, Casa de Campo La Capilla",
  },
  {
    id: 6,
    titulo:
      '"Duermen en un antiguo Gallinero mientras construyen un complejo turístico"',
    foto: "https://img.youtube.com/vi/WGwosA9222c/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WGwosA9222c&feature=youtu.be",
    altText: "Foto del antiguo Gallinero convertido en alojamiento",
  },
  {
    id: 5,
    titulo: '"La pareja que cambió su vida porteña para dormir en el campo en una capilla abandonada..."',
    foto: "https://www.infobae.com/resizer/v2/36EJNIFRXRHY7EPIPUF22J4YBI.jpeg?auth=3045ea579ad77df2f6a0402ec407309e95ab931a17f1d5ed6e145b36e2f6b618&smart=true&width=992&height=772&quality=85",
    url: "https://www.infobae.com/sociedad/2023/07/03/la-pareja-que-cambio-su-vida-portena-para-dormir-en-el-campo-en-una-capilla-abandonada-y-en-un-gallinero/",
    altText: "Captura del primer video de La Casa Viajera",
  },
  {
    id: 4,
    titulo:
      '"Castilla: Localidad de Chacabuco de la Provincia de Buenos Aires"',
    foto: "https://img.youtube.com/vi/HC0dSwjEu94/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=HC0dSwjEu94&ab_channel=TelediarioDigital",
    altText: "Vista de la localidad de Castilla",
  },
  {
    id: 3,
    titulo:
      '"En tren, micro o auto, destinos muy cerquita de Caba para despejarse, comer rico, descans..."',
    foto: foto4,
    url: "https://elle.clarin.com/estilo-de-vida/salidas/salidas-escapadas-destinos_0_IQP0XsX5f3.html#",
    altText: "Imagen de destinos cercanos a CABA",
  },
  {
    id: 2,
    titulo: '"Nota periodística Radio Eclipse 104.3"',
    foto: foto5,
    url: "https://www.facebook.com/share/v/18VHDzssJv/",
    altText: "Imagen de la entrevista en Radio Eclipse",
  },
  {
    id: 1,
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
