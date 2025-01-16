/* import { Header } from "./components/Header";
import { Camping } from "./components/Camping";
import { Services } from "./components/Services";
import * as Mkt from "./components/Mkt";
import { Gallery } from "./components/Gallery";
import { Tarifas } from "./components/Tarifas";
import { Llegar } from "../comoLlegar/Llegar";
import { Opinions } from "./components/Opinions"; */

//import { Ubication } from "./components/Ubication";

import { Header } from "./components/Header/Header";
import { Camping } from "./components/Camping/Camping";
import { Services } from "./components/Servicios/Services";
import { Mkt } from "./components/Marketing/Mkt";
import { Gallery } from "./components/GaleriaHome/Gallery";
import { Tarifas } from "./components/Tarifas/Tarifas";
import { Llegar } from "./components/ComoLlegar/Llegar";
import { Opinions } from "./components/Opiniones/Opinions";

export const Home = () => {
  return (
    <>
      <Header />
      <Camping />
      <Services />
      <Mkt/>
      <Gallery/>
      <Tarifas/>
      <Llegar/>
      <Opinions/>
    </>
  );
};
