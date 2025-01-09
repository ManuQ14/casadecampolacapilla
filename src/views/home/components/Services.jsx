import { Link } from "react-router-dom";

import styles from "../styles/home.module.scss";

import line from "../../../assets/icons/subrayServices.svg";

//Imports de iconos de servicios
import ducha from "../../../assets/icons/Duchas.svg";
import wifi from "../../../assets/icons/Wifi.svg";
import proveeduria from "../../../assets/icons/Proveeduria.svg";
import carpas from "../../../assets/icons/Carpas.svg";
import tomacorrientes from "../../../assets/icons/Tomacorrientes.svg";
import asador from "../../../assets/icons/Asador.svg";
import pileta from "../../../assets/icons/Pileta.svg";
import comidas from "../../../assets/icons/Comidas.svg";
import juegos from "../../../assets/icons/Juegos.svg";
import mesas from "../../../assets/icons/Mesas.svg";

export const Services = () => {
  return (
    <div className={styles.serviceSection} id="servicios">
      <div className={styles.containerTitle}>
        <h2 className={styles.h2Servicios}>Servicios</h2>
        <img
          src={line}
          alt="linea subrayadora"
          className={styles.lineSubrayer}
        />
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.contenedorServicio}>
          <img
            src={ducha}
            alt="icono ducha caliente"
            className={styles.iconClass}
          />
          <p className={styles.descripcionServicio}>
            Baños con ducha y agua caliente las 24hs
          </p>
        </div>

        <div className={styles.contenedorServicio}>
          <img src={wifi} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>Wifi en todo el predio</p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={proveeduria} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Proveeduría a costos de almacén. Bebidas, snacks y comestibles
            regionales
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={carpas} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Alquiler de carpas, colchones y frazadas
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={tomacorrientes} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Tomacorrientes e iluminación
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={asador} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Asador y fogonero. Se incluyen accesorios como discos de arado,
            estaca a la cruz, espeto, etc...
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={pileta} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            En temporada de verano hay piletas
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={comidas} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Preparación de comidas, desayunos y bebidas
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={juegos} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>
            Juegos para niños. Hamacas, calesitas, casita de juegos y rodados
          </p>
        </div>
        <div className={styles.contenedorServicio}>
          <img src={mesas} alt="" className={styles.iconClass} />
          <p className={styles.descripcionServicio}>Mesas al aire libre</p>
        </div>
      </div>

      <Link to="/el-camping" className={styles.buttonConoceMas}>
        Conocé más
      </Link>
    </div>
  );
};
