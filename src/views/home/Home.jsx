import { Header } from "./components/Header";
import { Camping } from "./components/Camping";
import { Services } from "./components/Services";
import * as Mkt from "./components/Mkt";
import { Gallery } from "./components/Gallery";
import { Tarifas } from "./components/Tarifas";
import { Llegar } from "../comoLlegar/Llegar";
import { Opinions } from "./components/Opinions";

//import { Ubication } from "./components/Ubication";

export const Home = () => {
  return (
    <>
      <Header />
      <Camping />
      <Services />
      <Mkt.Mkt />
      <Gallery />
      <Tarifas />
      <Llegar />
      <Opinions/>
    </>
  );
};
