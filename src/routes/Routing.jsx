import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../views/home/Home";
import { Historia } from "../views/history/Historia";
import { Contact } from "../views/contact/Contact";
//import { Galeria } from "../views/galeria/galeria";
import { Llegar } from "../views/comoLlegar/Llegar";
import { Error } from "../views/Error/Error";
import { Camping } from "../views/camping/Camping";

//import styles from "../"

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/nuestra-historia" element={<Historia />} />
          <Route path="/el-camping" element={<Camping />} />
        {/*   <Route path="/galeria" element={<Galeria />} /> */}
          <Route path="/como-llegar" element={<Llegar />} />
          <Route path="/contacto" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      <footer>copyright todos los derechos reservados</footer>
    </>
  );
};
