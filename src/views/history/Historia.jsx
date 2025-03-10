import { Helmet } from "react-helmet";

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
     <Helmet>
        <meta
          name="description"
          content="Casa de Campo La Capilla - Experiencia de Acampe Rural"
        />
        <link
          rel="canonical"
          href="https://casadecampolacapilla.com.ar/nuestra-historia"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Casa de Campo La Capilla" />
        <meta property="og:description" content="Casa de Campo La Capilla" />
        <meta
          property="og:url"
          content="https://www.casadecampolacapilla.com.ar"
        />
        <meta property="og:site_name" content="Casa de Campo La Capilla" />
        <meta
          property="og:image"
          content="https://casadecampolacapilla.com.ar/assets/logoHomeScrolled-DUxcL_Rd.png"
        />
      </Helmet>
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
