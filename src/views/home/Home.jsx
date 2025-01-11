import { Header } from "./components/Header";
import { Camping } from "./components/Camping";
import { Services } from "./components/Services";
import { Mkt } from "./components/mkt";
import { Gallery } from "./components/Gallery";
//import { Opinions } from "./components/Opinions";

//import { Ubication } from "./components/Ubication";

export const Home = () => {
  return (
    <>
      <Header />
      <Camping />
      <Services />
      <Mkt/>
      <Gallery/>

    </>
  );
};
