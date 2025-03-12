import { Helmet } from "react-helmet";

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
      <Helmet>
        {/*OG Meta Tags */}
        <meta
          name="description"
          content="Cómo Llegar - Sitio Web de La Casa de Campo La Capilla"
        />
        <link
          rel="canonical"
          href="https://www.casadecampolacapilla.com.ar/como-llegar"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cómo Llegar - Casa de Campo La Capilla"
        />
        <meta
          property="og:description"
          content="Cómo Llegar - Sitio web de La Casa de Campo La Capilla"
        />
        <meta
          property="og:url"
          content="https://www.casadecampolacapilla.com.ar/como-llegar"
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
          content="Cómo Llegar - Casa de Campo La Capilla"
        />
        <meta
          name="twitter:url"
          content="https://www.casadecampolacapilla.com.ar/como-llegar"
        />
        <meta
          name="twitter:description"
          content="Cómo Llegar - Sitio Web Casa de Campo La Capilla"
        />
        <meta
          name="twitter:image"
          content="https://casadecampolacapilla.com.ar/assets/CapillaLogo-DzawUU35.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Cómo Llegar - Casa de Campo La Capilla</title>
      </Helmet>
      <Header />
      {/**Inicio desplegable tren */}
      <div className={`${styles.mainLlegar} `}>
        <Desplegables />
        <DesplegableAuto />
        <DesplegableBici />
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7858.810076011966!2d-59.91222499999999!3d-34.61002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b95418c3bed66b%3A0x67d972631561ff58!2sCasa%20de%20Campo%20La%20Capilla!5e1!3m2!1ses-419!2sus!4v1737419683095!5m2!1ses-419!2sus"
            className={`${styles.mapaLocation2} hidden5`}
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
