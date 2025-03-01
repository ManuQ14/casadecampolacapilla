import { Header } from "./components/Header/Header";
import { Camping } from "./components/Camping/Camping";
import { Services } from "./components/Servicios/Services";
import { Mkt } from "./components/Marketing/Mkt";
import { Gallery } from "./components/GaleriaHome/Gallery";
import { Tarifas } from "./components/Tarifas/Tarifas";
import { Llegar } from "./components/ComoLlegar/Llegar";
import { Opinions } from "./components/Opiniones/Opinions";
import { Fut } from "./components/Footer/Fut";

import styles from "./components/Header/styles/header.module.scss";

import wpIcon from "../../assets/icons/iconWhatsapp.svg";

export const Home = () => {
  const WHATSAPP_NUMBER = "5491158567591";

  const goToWhatsapp = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=`;
  };

  return (
    <>
      <Header />
      <Camping />
      <Services />
      <Mkt />
      <Gallery />
      <Tarifas />
      <Llegar />
      <Opinions />
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
