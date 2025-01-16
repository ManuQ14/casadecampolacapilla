import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../views/home/Home";
import { Historia } from "../views/history/Historia";
import { Error } from "../views/Error/Error";

//imports svgs e iconos
import capillaIcon from "../assets/iconCapilla.jpeg";

import instagramFooter from "../assets/icons/footer/instagramFooter.svg";
import youtubeFooter from "../assets/icons/footer/youTubeFooter.svg";
import tiktokFootrr from "../assets/icons/footer/tikTokFooter.svg";
import facebookFooter from "../assets/icons/footer/facebookFooter.svg";

export const Routing = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/nuestra-historia" element={<Historia />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <img src={capillaIcon} alt="" width={140} className="iconCapilla" />
        <div className="contenedor-navegador">
          <div
            onClick={() => handleScrollToSection("camping")}
            className="navegador"
          >
            El Camping
          </div>
          <div
            onClick={() => handleScrollToSection("servicios")}
            className="navegador"
          >
            Servicios
          </div>
          <div
            onClick={() => handleScrollToSection("tarifas")}
            className="navegador"
          >
            Tarifas
          </div>
          <div
            onClick={() => handleScrollToSection("llegar")}
            className="navegador"
          >
            Cómo llegar
          </div>
        </div>
        <div className="media-icons-container">
          <a
            href="https://instagram.com/casadecampolacapilla"
            target="_blanc"
            rel="noreferrers"
          >
            <img src={instagramFooter} className="icon-media" />
          </a>
          <a
            href="https://www.youtube.com/user/nikolunapra"
            target="_blanc"
            rel="noreferrers"
          >
            <img src={youtubeFooter} className="icon-media" />
          </a>
          <a
            href="https://www.tiktok.com/@casadecampolacapilla"
            target="_blanc"
            rel="noreferrers"
          >
            <img src={tiktokFootrr} className="icon-media" />
          </a>
          <a
            href="https://www.facebook.com/casadecampolacapilla"
            target="_blanc"
            rel="noreferrers"
          >
            <img src={facebookFooter} className="icon-media" />
          </a>
        </div>
        <p className="texto-copyright">
          Todos los derechos reservados. Creado por Camila Gallardo
        </p>
      </footer>
    </>
  );
};
