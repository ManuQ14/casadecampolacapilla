import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "../views/home/Home";
import { Historia } from "../views/history/Historia";
import { Error } from "../views/Error/Error";



export const Routing = () => {
 

/*   const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      document.body.classList.remove("no-scroll");
    }
  }; */



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

      
    </>
  );
};
