import { BrowserRouter, Routes, Route /* Link */ } from "react-router-dom";

import { Home } from "../views/home/Home";
import { Nosotros} from "../views/main/Nosotros"
import { Contact } from "../views/contact/Contact";

import { Error } from "../views/Error/Error"

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/contacto" element={<Contact/>}/>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
