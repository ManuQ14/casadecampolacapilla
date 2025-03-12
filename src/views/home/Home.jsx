//Import de helmet
import { Helmet } from "react-helmet";

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
      <Helmet>
        {/*OG Meta Tags */}
        <meta
          name="description"
          content="Inicio - Sitio Web de La Casa de Campo La Capilla"
        />
        <link
          rel="canonical"
          href="https://www.casadecampolacapilla.com.ar/inicio"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inicio - Casa de Campo La Capilla" />
        <meta
          property="og:description"
          content="Inicio - Sitio web de La Casa de Campo La Capilla"
        />
        <meta
          property="og:url"
          content="https://www.casadecampolacapilla.com.ar/inicio"
        />
        <meta
          property="og:site_name"
          content="Casa de Campo La Capilla - Experiencia de Acampe Rural"
        />
        <meta
          property="og:image"
          content="https://casadecampolacapilla.com.ar/assets/CapillaLogo-DzawUU35.svg"
        />
        <meta
          property="og:image:url"
          content="https://casadecampolacapilla.com.ar/assets/CapillaLogo-DzawUU35.svg"
        />
        <meta
          property="og:image:secure_url"
          content="https://casadecampolacapilla.com.ar/assets/CapillaLogo-DzawUU35.svg"
        />
        <meta
          name="keywords"
          content="Casa de Campo, Casa de Campo La Capilla, La Capilla, Castilla, Experiencia de Acampe Rural, Tranquilidad, Vivila, Camping, Acampe, Acampe Rural, Rural"
        />

        {/*Twitter Cards */}
        <meta
          name="twitter:title"
          content="Inicio - Casa de Campo La Capilla"
        />
        <meta
          name="twitter:url"
          content="https://www.casadecampolacapilla.com.ar/inicio"
        />
        <meta
          name="twitter:description"
          content="Inicio - Sitio Web Casa de Campo La Capilla"
        />
        <meta
          name="twitter:image"
          content="https://casadecampolacapilla.com.ar/assets/CapillaLogo-DzawUU35.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Inicio - Casa de Campo La Capilla</title>
      </Helmet>

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
