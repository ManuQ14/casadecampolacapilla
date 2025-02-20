import styles from "./styles/services.module.scss";
import line from "../../../../assets/icons/subrayLightOrange.svg";

// Importamos todas las imágenes de servicios
import ducha from "../../../../assets/icons/servicesIcons/Duchas.svg";
import wifi from "../../../../assets/icons/servicesIcons/Wifi.svg";
import proveeduria from "../../../../assets/icons/servicesIcons/Proveeduria.svg";
import carpas from "../../../../assets/icons/servicesIcons/Carpas.svg";
import tomacorrientes from "../../../../assets/icons/servicesIcons/Tomacorrientes.svg";
import asador from "../../../../assets/icons/servicesIcons/Asador.svg";
import pileta from "../../../../assets/icons/servicesIcons/Pileta.svg";
import comidas from "../../../../assets/icons/servicesIcons/Comidas.svg";
import juegos from "../../../../assets/icons/servicesIcons/Juegos.svg";
import mesas from "../../../../assets/icons/servicesIcons/Mesas.svg";

// Array de servicios
const servicios = [
  {
    id: 1,
    icon: ducha,
    description: "Baños con ducha y agua caliente las 24hs",
    alt: "Duchas",
  },
  {
    id: 2,
    icon: wifi,
    description: "Wifi en todo el predio",
    alt: "Wifi",
  },
  {
    id: 3,
    icon: proveeduria,
    description:
      "Proveeduría a costos de almacén. Bebidas, snacks y comestibles regionales",
    alt: "Proveeduría",
  },
  {
    id: 4,
    icon: carpas,
    description: "Alquiler de carpas, colchones y frazadas",
    alt: "Carpas",
  },
  {
    id: 5,
    icon: tomacorrientes,
    description: "Tomacorrientes e iluminación",
    alt: "Tomacorrientes",
  },
  {
    id: 6,
    icon: comidas,
    description:
      "Preparación de comidas, desayunos y bebidas",
    alt: "comidas",
  },
  {
    id: 7,
    icon: pileta,
    description: "Piletas en temporada de verano",
    alt: "Pileta",
  },
  {
    id: 8,
    icon: asador,
    description: "Asador y fogonero. Se incluyen accesorios como disco de arado, estacas a la cruz, espeto, etc...",
    alt: "Asador",
  },
  {
    id: 9,
    icon: juegos,
    description:
      "Juegos para niños. Hamacas, calesitas, casita de juegos y rodados",
    alt: "Juegos infantiles",
  },
  {
    id: 10,
    icon: mesas,
    description: "Mesas al aire libre",
    alt: "Mesas",
  },
];

export const Services = () => {
  return (
    <div className={styles.serviceSection} id="servicios">
      <div className={styles.coverServices}>
        <div className={styles.subtitleContainerServices}>
          <h2 className={styles.h2Servicios}>Servicios</h2>
          <img
            src={line}
            alt="linea subrayadora de subtitulo"
            className={styles.lineServicios}
          />
        </div>
        <div className={styles.iconServiciesContainer}>
          {servicios.map((servicio) => (
            <div className={styles.serviceContainer} key={servicio.id}>
              <div className={styles.contenedorIcon}>
                <img
                  src={servicio.icon}
                  alt={servicio.alt}
                  className={styles.iconService}
                />
              </div>
              <span className={styles.spanServicios}>{servicio.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
