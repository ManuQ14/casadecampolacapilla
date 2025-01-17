import { Header } from "./components/Header/Header";
import { Camping } from "./components/Camping/Camping";
import { Services } from "./components/Servicios/Services";
import { Mkt } from "./components/Marketing/Mkt";
import { Gallery } from "./components/GaleriaHome/Gallery";
import { Tarifas } from "./components/Tarifas/Tarifas";
import { Llegar } from "./components/ComoLlegar/Llegar";
import { Opinions } from "./components/Opiniones/Opinions";
import { Fut } from "./components/Footer/Fut";

export const Home = () => {
  return (
    <>
      <Header />
      <Camping />
      <Services />
      <Mkt />
      <Gallery />
      <Tarifas />
      <Llegar />
      <Opinions />
      <Fut />
    </>
  );
};
