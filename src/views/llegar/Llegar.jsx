import styles from "./styles/llegar.module.scss";

import { Header } from "./components/Header";
import { Desplegables } from "./components/Desplegables";
import { DesplegableAuto } from "./components/DesplegableAuto";
import { DesplegableBici } from "./components/DesplegableBici";
import { Fut } from "../home/components/Footer/Fut";

import wpIcon from "../../assets/icons/iconWhatsapp.svg";

export const Llegar = () => {
  const WHATSAPP_NUMBER = "5491158567591";

  const goToWhatsapp = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=`;
  };

  return (
    <>
      <Header />
      {/**Inicio desplegable tren */}
      <div className={styles.mainLlegar}>
        <Desplegables />
        <DesplegableAuto />
        <DesplegableBici />
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7858.810076011966!2d-59.91222499999999!3d-34.61002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCasa%20de%20Campo%20La%20Capilla!5e1!3m2!1ses-419!2sus!4v1737419683095!5m2!1ses-419!2sus"
            className={styles.mapaLocation2}
          ></iframe>
        </div>
      </div>
      <Fut />

      <img
        src={wpIcon}
        alt="Icono wp"
        className={styles.wpIcon}
        onClick={() => window.open(goToWhatsapp(), "_blank")}
      />
    </>
  );
};
