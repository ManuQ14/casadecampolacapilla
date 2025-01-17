import { Header } from "./components/Header";
import { Sueño } from "./components/Sueño";
import { Pueblo } from "./components/Pueblo";
import { Notas } from "./components/Notas";
import { Fut } from "../home/components/Footer/Fut";

export const Historia = () => {
  return (
    <>
      <Header />
      <Sueño />
      <Pueblo />
      <Notas />
      <Fut />
    </>
  );
};
