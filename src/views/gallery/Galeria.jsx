import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Fut } from "../home/components/Footer/Fut";

import styles from "./styles/galeria.module.scss";

import wpIcon from "../../assets/icons/iconWhatsapp.svg";

export const Galeria = () => {
  const WHATSAPP_NUMBER = "5491158567591";

  const goToWhatsapp = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=`;
  };

  return (
    <>
      <Header />
      <Gallery />
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
