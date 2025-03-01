import { Header } from "./components/Header";
import { Sueño } from "./components/Sueño";
import { Pueblo } from "./components/Pueblo";
import { Notas } from "./components/Notas";
import { Fut } from "../home/components/Footer/Fut";

import styles from "./styles/history.module.scss";

import wpIcon from "../../assets/icons/iconWhatsapp.svg";

export const Historia = () => {
  const WHATSAPP_NUMBER = "5491158567591";

  const goToWhatsapp = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=`; 
  };

  return (
    <>
      <Header />
      <Sueño />
      <Pueblo />
      <Notas />
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
