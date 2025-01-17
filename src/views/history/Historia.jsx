import { Header } from "./components/Header";
import { Sueño } from "./components/Sueño";
import { Pueblo } from "./components/Pueblo";
import { Notas } from "./components/Notas";
import { Footer } from "../home/components/Footer/footer";


export const Historia = () => {
  return (
    <>
      <Header />
      <Sueño />
      <Pueblo/>
      <Notas/>
      <Footer/>
    </>
  );
};
