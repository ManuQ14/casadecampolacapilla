import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../views/home/Home";
import { Historia } from "../views/history/Historia";
import { Galeria } from "../views/gallery/Galeria";
import { Llegar } from "../views/llegar/Llegar";
import { Contact } from "../views/contact/Contact";
import { Error } from "../views/Error/Error";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/nuestra-historia" element={<Historia />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/como-llegar" element={<Llegar />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
