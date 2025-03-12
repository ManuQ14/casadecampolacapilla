import { Helmet } from "react-helmet";

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
      <Helmet>
        {/*OG Meta Tags */}
        <meta
          name="description"
          content="Galería - Sitio Web de La Casa de Campo La Capilla"
        />
        <link
          rel="canonical"
          href="https://www.casadecampolacapilla.com.ar/galeria"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Galería - Casa de Campo La Capilla"
        />
        <meta
          property="og:description"
          content="Galería - Sitio web de La Casa de Campo La Capilla"
        />
        <meta
          property="og:url"
          content="https://www.casadecampolacapilla.com.ar/galeria"
        />
        <meta
          property="og:site_name"
          content="Casa de Campo La Capilla - Experiencia de Acampe Rural"
        />
        <meta
          property="og:image"
          content="https://casadecampolacapilla.com.ar/favicon.png"
        />
        <meta
          property="og:image:url"
          content="https://casadecampolacapilla.com.ar/favicon.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://casadecampolacapilla.com.ar/favicon.png"
        />
        <meta
          name="keywords"
                content="Casa de Campo, Casa de Campo La Capilla, La Capilla, Castilla, Experiencia de Acampe Rural, Tranquilidad, Vivila, Camping, Acampe, Acampe Rural, Rural, Camping, Campings en Buenos Aires"
        />

        {/*Twitter Cards */}
        <meta
          name="twitter:title"
          content="Galería - Casa de Campo La Capilla"
        />
        <meta
          name="twitter:url"
          content="https://www.casadecampolacapilla.com.ar/galeria"
        />
        <meta
          name="twitter:description"
          content="Galería - Sitio Web Casa de Campo La Capilla"
        />
        <meta
          name="twitter:image"
          content="https://casadecampolacapilla.com.ar/favicon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Galería - Casa de Campo La Capilla</title>
      </Helmet>
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
