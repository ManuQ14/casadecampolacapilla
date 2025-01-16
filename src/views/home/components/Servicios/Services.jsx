//import { Link } from "react-router-dom";

import styles from "./styles/services.module.scss";

import line from "../../../../assets/icons/subrayLightOrange.svg";

//Imports de iconos de servicios
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
          <div className={styles.serviceContainer}>
            <img src={ducha} alt="Duchas" width={40} height={54} />
            <span>Baños con ducha y agua caliente las 24hs</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={wifi} alt="" />
            <span>Wifi en todo el predio</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={proveeduria} alt="" />
            <span>
              Proveeduría a costos de almacén. Bebidas, snacks y comestibles
              regionales
            </span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={carpas} alt="" />
            <span>Alquiler de carpas, colchones y frazadas</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={tomacorrientes} alt="" />
            <span>Tomacorrientes e iluminación</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={asador} alt="" />
            <span>
              Asador y fogonero. Se incluyen accesorios como discos de arado,
              estaca a la cruz, espeto, etc...
            </span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={pileta} alt="" />
            <span>Piletas en temporada de verano</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={comidas} alt="" />
            <span>Preparación de comidas, desayunos y bebidas</span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={juegos} alt="" />
            <span>
              Juegos para niños. Hamacas, calesitas, casita de juegos y rodados
            </span>
          </div>
          <div className={styles.serviceContainer}>
            <img src={mesas} alt="" />
            <span>Mesas al aire libre</span>
          </div>
        </div>
      </div>
    </div>
  );
};
