import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Fut } from "../home/components/Footer/Fut";

import styles from "./styles/contact.module.scss";
import wpIcon from "../../assets/icons/wpicon.svg";

export const Contact = () => {
  const WHATSAPP_NUMBER = "5491158567591";

  const goToWhatsapp = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=`;
  };

  return (
    <>
      <Header />
      <Form />
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
